import { useEffect, useState } from 'react'

const COLORS = ['#7C3AED', '#3B82F6', '#EC4899', '#F97316', '#10B981', '#FBBF24', '#EF4444']

export default function Confetti() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 2,
      size: 6 + Math.random() * 8,
      shape: Math.random() > 0.5 ? 'circle' : 'square',
    }))
    setPieces(newPieces)
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
