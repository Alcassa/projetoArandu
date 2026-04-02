interface Level {
  name: string;
  icon: string;
  color: string;
}

interface LevelBadgeProps {
  level: Level;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <div>
      <div className="text-6xl mb-2">{level.icon}</div>
      <h2 className={`text-3xl font-bold mb-8 ${level.color}`}>{level.name}</h2>
    </div>
  );
}
