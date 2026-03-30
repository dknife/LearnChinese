import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import QuizOption from '../components/QuizOption'
import ProgressBar from '../components/ProgressBar'
import { getLevelData, LEVEL_TITLES } from '../data/levels'

const TYPE_LABELS = {
  cn_to_kr: '중국어 → 한국어',
  kr_to_cn: '한국어 → 중국어',
  fill_blank: '빈칸 채우기',
}

export default function Quiz() {
  const { level } = useParams()
  const navigate = useNavigate()
  const levelNum = parseInt(level)

  const levelData = getLevelData(levelNum)
  const allQuestions = levelData?.quiz || []

  // Randomly select 10 questions from the pool (shuffle and slice)
  const [questions] = useState(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 10)
  })
  const totalQuestions = questions.length

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleSelect = useCallback((index) => {
    if (selected !== null) return

    const question = questions[currentQuestion]
    const isCorrect = index === question.answer
    const newScore = isCorrect ? score + 1 : score

    setSelected(index)
    setScore(newScore)
    setAnswers((prev) => [...prev, { question: currentQuestion, selected: index, correct: question.answer }])

    setTimeout(() => {
      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion((prev) => prev + 1)
        setSelected(null)
      } else {
        navigate(`/result/${levelNum}?score=${newScore}&total=${totalQuestions}`)
      }
    }, 1200)
  }, [selected, currentQuestion, questions, score, totalQuestions, navigate, levelNum])

  if (!levelData || !questions.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-2xl font-bold text-white mb-2">퀴즈를 찾을 수 없습니다</h1>
        <p className="text-white/60 mb-6">레벨 {levelNum} 데이터가 존재하지 않습니다.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-game-yellow text-gray-900 font-bold rounded-xl hover:brightness-110 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const typeLabel = TYPE_LABELS[question.type] || question.type

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/60">
          레벨 {levelNum} — {LEVEL_TITLES[levelNum] || ''}
        </span>
        <span className="text-sm font-bold text-game-yellow">
          {currentQuestion + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <ProgressBar current={currentQuestion + 1} total={totalQuestions} />

      {/* Question type badge */}
      <div className="mt-6 mb-4 flex justify-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">
          {typeLabel}
        </span>
      </div>

      {/* Question text */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <QuizOption
            key={`${currentQuestion}-${index}`}
            text={option}
            index={index}
            selected={selected}
            correct={question.answer}
            disabled={selected !== null}
            onClick={handleSelect}
          />
        ))}
      </div>

      {/* Feedback message */}
      {selected !== null && (
        <div className="mt-6 text-center animate-fade-in">
          {selected === question.answer ? (
            <p className="text-lg font-bold text-green-400">정답입니다! 🎉</p>
          ) : (
            <p className="text-lg font-bold text-red-400">
              오답! 정답은 <span className="text-game-yellow">{question.options[question.answer]}</span>
            </p>
          )}
        </div>
      )}

      {/* Score indicator */}
      <div className="mt-6 text-center">
        <span className="text-sm text-white/40">
          현재 점수: {score} / {currentQuestion + (selected !== null ? 1 : 0)}
        </span>
      </div>
    </div>
  )
}
