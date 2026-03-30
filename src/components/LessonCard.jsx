import { useNavigate } from 'react-router-dom'

const LEVEL_ICONS = [
  '👋', '🔢', '👨‍👩‍👧', '🍜', '🗺️', '🛍️', '🚕', '⏰', '📞', '🍕',
  '😊', '📅', '👔', '🌤️', '🎮', '📱', '🏦', '🏥', '✈️', '🏨',
  '📸', '🚨', '💼', '🎎', '🎓',
]

export default function LessonCard({ level, title, status, score }) {
  const navigate = useNavigate()
  const icon = LEVEL_ICONS[level - 1] || '📚'

  const handleClick = () => {
    if (status === 'locked') return
    navigate(`/lesson/${level}`)
  }

  const statusClass = {
    locked: 'level-locked',
    available: 'level-available',
    completed: 'level-completed',
  }[status]

  return (
    <div className="flex flex-col items-center gap-1" onClick={handleClick}>
      <div className="relative">
        <div className={`level-node ${statusClass}`}>
          {status === 'locked' ? (
            <span className="text-xl">🔒</span>
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>
        {status === 'completed' && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pop">
            <span className="text-xs">✓</span>
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-center max-w-[80px] leading-tight">
        {status === 'locked' ? (
          <span className="text-gray-500">Lv.{level}</span>
        ) : (
          <span className={status === 'completed' ? 'text-green-300' : 'text-white'}>
            {title}
          </span>
        )}
      </span>
      {status === 'completed' && score != null && (
        <span className="text-xs text-game-yellow">⭐ {score}/5</span>
      )}
    </div>
  )
}
