import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rocket, Mail, Lock, ArrowRight, User, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../data/firebaseConfig";

export default function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      toast.success("Login bem-sucedido!");
      navigate("/");
    } catch (error: any) {
      toast.error("Email ou senha inválidos");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

      await updateProfile(userCredential.user, {
        displayName: registerName
      });

      await auth.currentUser?.reload();

      toast.success("Conta criada com sucesso!");

      navigate("/");

    } catch (error: any) {
      toast.error("Erro ao criar conta");
      console.error(error);

    } finally {
      setIsLoading(false);
    }
  };
  const handleResetPassword = async () => {
    if (!loginEmail) {
      toast.error("Digite seu email primeiro");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, loginEmail);

      toast.success("Verifique sua caixa de entrada para redefinir a senha");

    } catch (error: any) {
      console.error(error);

      toast.error("Erro ao enviar email");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-6 text-white hover:text-blue-300 transition-colors">
            <Rocket className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Projeto Arandu</span>
          </Link>
          <p className="text-gray-300">
            Acesse para salvar seu progresso na Missão Cansat
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-800/50 p-1">
            <TabsTrigger value="login" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Entrar
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Cadastrar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-slate-800/80 border-slate-700 text-white shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Bem-vindo de volta!</CardTitle>
                <CardDescription className="text-gray-400">
                  Insira suas credenciais para continuar sua jornada.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10 bg-slate-900/50 border-slate-600 focus:border-blue-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-gray-200">Senha</Label>
                      <button
                        type="button"
                        onClick={handleResetPassword}
                        className="text-sm text-blue-400 hover:text-blue-300"
                      >
                        Esqueceu a senha?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                        <Input
                          id="password"
                          type={showLoginPassword ? "text" : "password"}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Sua senha"
                          className="pl-10 pr-10 bg-slate-900/50 border-slate-600 focus:border-blue-500 text-white"
                          required
                        />

                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showLoginPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-5 "
                    disabled={isLoading}
                  >
                    {isLoading ? "Entrando..." : (
                      <>
                        Entrar na Missão <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="bg-slate-800/80 border-slate-700 text-white shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Crie sua conta</CardTitle>
                <CardDescription className="text-gray-400">
                  Junte-se à tripulação e comece a aprender.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">Nome Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="pl-10 bg-slate-900/50 border-slate-600 focus:border-blue-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-gray-200">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        className="pl-10 bg-slate-900/50 border-slate-600 focus:border-blue-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-gray-200">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                      <Input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        placeholder="Sua senha"
                        className="pl-10 pr-10 bg-slate-900/50 border-slate-600 focus:border-blue-500 text-white"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowRegisterPassword(!showRegisterPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showRegisterPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? "Criando conta..." : (
                      <>
                        Iniciar Jornada <Rocket className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}