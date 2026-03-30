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
      <div className="relative overflow-hidden rounded-full">
        <div className={`level-node ${statusClass}`}>
          {status === 'locked' ? (
            <span className="text-xl">🔒</span>
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>
        {status === 'completed' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[120%] bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-center py-[1px] shadow-md"
              style={{ transform: 'rotate(-35deg)' }}>
              <span className="text-[9px] font-black text-white tracking-wider drop-shadow-sm">PASS</span>
            </div>
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
    </div>
  )
}
