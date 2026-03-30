import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useProgress from '../hooks/useProgress'
import Confetti from '../components/Confetti'
import { TOTAL_LEVELS } from '../data/levels'

const PASS_THRESHOLD = 4
const TOTAL_QUESTIONS = 5

export default function Result() {
  const { level } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { completeLevel } = useProgress()

  const levelNum = parseInt(level)
  const score = parseInt(searchParams.get('score')) || 0
  const total = parseInt(searchParams.get('total')) || TOTAL_QUESTIONS
  const passed = score >= PASS_THRESHOLD

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (passed && !saved) {
      completeLevel(levelNum, score)
      setSaved(true)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const isLastLevel = levelNum >= TOTAL_LEVELS
  const nextLevel = levelNum + 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      {passed && <Confetti />}

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div
          className={`
            relative overflow-hidden rounded-3xl shadow-2xl
            ${passed
              ? 'bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-2 border-amber-200'
              : 'bg-gradient-to-br from-slate-50 via-white to-blue-50 border-2 border-slate-200'
            }
          `}
        >
          {/* Decorative top bar */}
          <div
            className={`h-2 w-full ${
              passed
                ? 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400'
                : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
            }`}
          />

          <div className="px-8 py-10 text-center">
            {/* Emoji */}
            <div className="text-7xl mb-4 animate-bounce">
              {passed ? '\uD83C\uDF89' : '\uD83D\uDE05'}
            </div>

            {/* Title */}
            <h1
              className={`text-2xl font-bold mb-2 ${
                passed ? 'text-amber-700' : 'text-slate-700'
              }`}
            >
              {passed ? '축하합니다!' : '아쉬워요!'}
            </h1>

            <p className="text-gray-500 mb-6 text-sm">
              {passed
                ? `레벨 ${levelNum}을 통과했어요!`
                : `레벨 ${levelNum} 통과 기준에 못 미쳤어요.`
              }
            </p>

            {/* Score display */}
            <div
              className={`
                inline-flex items-center justify-center w-32 h-32 rounded-full mb-6
                ${passed
                  ? 'bg-gradient-to-br from-amber-100 to-yellow-200 ring-4 ring-amber-300/50'
                  : 'bg-gradient-to-br from-slate-100 to-blue-200 ring-4 ring-slate-300/50'
                }
              `}
            >
              <div>
                <span
                  className={`text-4xl font-extrabold ${
                    passed ? 'text-amber-600' : 'text-slate-600'
                  }`}
                >
                  {score}
                </span>
                <span
                  className={`text-xl font-medium ${
                    passed ? 'text-amber-400' : 'text-slate-400'
                  }`}
                >
                  /{total}
                </span>
              </div>
            </div>

            {/* Pass info */}
            <p className="text-xs text-gray-400 mb-8">
              통과 기준: {PASS_THRESHOLD}/{TOTAL_QUESTIONS} ({Math.round((PASS_THRESHOLD / TOTAL_QUESTIONS) * 100)}%)
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              {passed ? (
                <>
                  {!isLastLevel && (
                    <button
                      onClick={() => navigate(`/lesson/${nextLevel}`)}
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white
                        bg-gradient-to-r from-amber-500 to-orange-500
                        hover:from-amber-600 hover:to-orange-600
                        shadow-lg shadow-amber-500/30
                        transform hover:scale-[1.02] active:scale-[0.98]
                        transition-all duration-200"
                    >
                      다음 레벨 &rarr;
                    </button>
                  )}
                  <Link
                    to="/"
                    className="w-full py-3 px-6 rounded-xl font-semibold
                      text-amber-700 bg-amber-100 hover:bg-amber-200
                      transition-all duration-200 inline-block"
                  >
                    홈으로
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate(`/quiz/${levelNum}`)}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-white
                      bg-gradient-to-r from-indigo-500 to-purple-500
                      hover:from-indigo-600 hover:to-purple-600
                      shadow-lg shadow-indigo-500/30
                      transform hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-200"
                  >
                    다시 도전
                  </button>
                  <button
                    onClick={() => navigate(`/lesson/${levelNum}`)}
                    className="w-full py-3 px-6 rounded-xl font-semibold
                      text-indigo-700 bg-indigo-100 hover:bg-indigo-200
                      transition-all duration-200"
                  >
                    복습하기
                  </button>
                  <Link
                    to="/"
                    className="w-full py-3 px-6 rounded-xl font-semibold
                      text-gray-500 bg-gray-100 hover:bg-gray-200
                      transition-all duration-200 inline-block"
                  >
                    홈으로
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Decorative bottom corners */}
          <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10">
            <div
              className={`w-full h-full rounded-tr-full ${
                passed ? 'bg-amber-500' : 'bg-indigo-500'
              }`}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
            <div
              className={`w-full h-full rounded-tl-full ${
                passed ? 'bg-orange-500' : 'bg-purple-500'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
