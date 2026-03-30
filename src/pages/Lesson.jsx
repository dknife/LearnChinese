import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ConversationBubble from '../components/ConversationBubble'
import ProgressBar from '../components/ProgressBar'
import { getLevelData } from '../data/levels'

export default function Lesson() {
  const { level } = useParams()
  const navigate = useNavigate()
  const levelNum = parseInt(level)

  const [levelData, setLevelData] = useState(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const data = getLevelData(levelNum)
    setLevelData(data)
    setVisibleCount(0)
  }, [levelNum])

  // Level not found
  if (!levelData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="text-6xl mb-4">😥</div>
        <h2 className="text-2xl font-bold text-white mb-2">레벨을 찾을 수 없습니다</h2>
        <p className="text-white/70 mb-6">레벨 {levelNum} 데이터가 존재하지 않습니다.</p>
        <Link
          to="/"
          className="btn-game px-6 py-3 rounded-xl text-lg font-bold"
        >
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  const conversations = levelData.conversations || []
  const vocabulary = levelData.vocabulary || []
  const totalBubbles = conversations.length
  const allRevealed = visibleCount >= totalBubbles

  const handleRevealNext = () => {
    if (visibleCount < totalBubbles) {
      setVisibleCount((prev) => prev + 1)
    }
  }

  return (
    <div className="min-h-screen p-4 pb-24">
      {/* Header */}
      <div className="max-w-lg mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-3 transition-colors"
        >
          <span>&larr;</span> 레벨 선택
        </Link>

        <div className="card-game rounded-2xl p-5 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-game-yellow/20 text-game-yellow font-bold text-lg">
              {levelNum}
            </span>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">
                {levelData.title}
              </h1>
              <p className="text-game-yellow text-sm font-medium">
                {levelData.titleCn}
              </p>
            </div>
          </div>
          {levelData.description && (
            <p className="text-white/70 text-sm mt-2">{levelData.description}</p>
          )}
        </div>

        {/* Progress */}
        <ProgressBar
          current={visibleCount}
          total={totalBubbles}
          label={`대화 진행: ${visibleCount} / ${totalBubbles}`}
        />
      </div>

      {/* Conversations */}
      <div className="max-w-lg mx-auto flex flex-col gap-3 mb-6">
        {conversations.slice(0, visibleCount).map((conv, index) => (
          <ConversationBubble
            key={index}
            speaker={conv.speaker}
            chinese={conv.chinese}
            pinyin={conv.pinyin}
            korean={conv.korean}
            highlight={conv.highlight}
          />
        ))}
      </div>

      {/* Tap to reveal next bubble */}
      {!allRevealed && (
        <div className="max-w-lg mx-auto text-center mb-6">
          <button
            onClick={handleRevealNext}
            className="btn-game w-full py-4 rounded-xl text-lg font-bold
              animate-pulse hover:animate-none active:scale-95 transition-transform"
          >
            다음 대화 보기 ({visibleCount + 1} / {totalBubbles})
          </button>
        </div>
      )}

      {/* Vocabulary section — shown after all conversations revealed */}
      {allRevealed && vocabulary.length > 0 && (
        <div className="max-w-lg mx-auto mb-6 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📝</span>
            <h2 className="text-xl font-bold text-white">핵심 단어</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {vocabulary.map((word, index) => (
              <div
                key={index}
                className="card-game rounded-xl p-3 text-center hover:scale-105 transition-transform"
              >
                <p className="text-xl font-bold text-game-yellow mb-1">
                  {word.chinese}
                </p>
                <p className="text-xs text-white/60 mb-1">{word.pinyin}</p>
                <p className="text-sm text-white/90">{word.korean}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz button — shown after all conversations revealed */}
      {allRevealed && (
        <div className="max-w-lg mx-auto text-center animate-slide-up">
          <button
            onClick={() => navigate(`/quiz/${levelNum}`)}
            className="btn-game w-full py-4 rounded-xl text-lg font-bold
              bg-gradient-to-r from-game-green to-emerald-500
              hover:brightness-110 active:scale-95 transition-all"
          >
            🎯 퀴즈 시작
          </button>
        </div>
      )}
    </div>
  )
}
