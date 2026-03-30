import { useState, useCallback } from 'react'

const STORAGE_KEY = 'learnChinese_progress'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore parse errors
  }
  return { completedLevels: [], scores: {} }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export default function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  const getMaxLevel = useCallback(() => {
    const { completedLevels } = progress
    if (completedLevels.length === 0) return 1
    return Math.max(...completedLevels) + 1
  }, [progress])

  const isLevelAvailable = useCallback((level) => {
    if (level === 1) return true
    return progress.completedLevels.includes(level - 1)
  }, [progress])

  const isLevelCompleted = useCallback((level) => {
    return progress.completedLevels.includes(level)
  }, [progress])

  const completeLevel = useCallback((level, score) => {
    setProgress(prev => {
      const next = {
        completedLevels: prev.completedLevels.includes(level)
          ? prev.completedLevels
          : [...prev.completedLevels, level],
        scores: { ...prev.scores, [level]: score },
      }
      saveProgress(next)
      return next
    })
  }, [])

  const getScore = useCallback((level) => {
    return progress.scores[level] ?? null
  }, [progress])

  const getTotalProgress = useCallback(() => {
    return progress.completedLevels.length
  }, [progress])

  const resetProgress = useCallback(() => {
    const empty = { completedLevels: [], scores: {} }
    saveProgress(empty)
    setProgress(empty)
  }, [])

  return {
    progress,
    getMaxLevel,
    isLevelAvailable,
    isLevelCompleted,
    completeLevel,
    getScore,
    getTotalProgress,
    resetProgress,
  }
}
