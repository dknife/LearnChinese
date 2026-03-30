export default function ProgressBar({ current, total, label }) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-white/70">{label}</span>
          <span className="text-sm font-bold text-game-yellow">{percent}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="progress-fill h-full rounded-full bg-gradient-to-r from-game-yellow via-game-orange to-game-pink"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
