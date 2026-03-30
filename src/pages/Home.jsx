import useProgress from '../hooks/useProgress'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'
import { TOTAL_LEVELS, LEVEL_TITLES } from '../data/levels'

export default function Home() {
  const { isLevelCompleted, isLevelAvailable, getScore, getTotalProgress } = useProgress()

  const completedCount = getTotalProgress()

  // Build levels array 1..25
  const levels = Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1)

  // Split into rows of 5 for a snake/winding path
  const rows = []
  for (let i = 0; i < levels.length; i += 5) {
    rows.push(levels.slice(i, i + 5))
  }

  return (
    <div className="card-game min-h-screen p-4 pb-20">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-4">레벨 선택</h1>
        <div className="max-w-md mx-auto">
          <ProgressBar
            current={completedCount}
            total={TOTAL_LEVELS}
            label={`${completedCount} / ${TOTAL_LEVELS} 레벨 완료`}
          />
        </div>
      </div>

      {/* Level map grid — winding snake path */}
      <div className="max-w-lg mx-auto flex flex-col gap-6">
        {rows.map((row, rowIndex) => {
          // Even rows left-to-right, odd rows right-to-left
          const orderedRow = rowIndex % 2 === 0 ? row : [...row].reverse()

          return (
            <div key={rowIndex} className="grid grid-cols-5 gap-3 justify-items-center">
              {orderedRow.map((level) => {
                const completed = isLevelCompleted(level)
                const available = isLevelAvailable(level)
                const status = completed
                  ? 'completed'
                  : available
                    ? 'available'
                    : 'locked'

                return (
                  <LessonCard
                    key={level}
                    level={level}
                    title={LEVEL_TITLES[level]}
                    status={status}
                    score={completed ? getScore(level) : null}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
