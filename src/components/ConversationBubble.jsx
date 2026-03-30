export default function ConversationBubble({ speaker, chinese, pinyin, korean, highlight }) {
  const isA = speaker === 'A'

  return (
    <div className={`flex ${isA ? 'justify-start' : 'justify-end'} animate-slide-up`}>
      <div className={`bubble ${isA ? 'bubble-a' : 'bubble-b'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold opacity-70">
            {isA ? '👤 A' : '👥 B'}
          </span>
        </div>
        <p className={`text-lg font-bold ${highlight ? 'text-game-yellow' : 'text-white'}`}>
          {chinese}
        </p>
        <p className="text-sm text-white/70 mt-1">{pinyin}</p>
        <p className="text-sm text-white/90 mt-1 border-t border-white/20 pt-1">
          {korean}
        </p>
      </div>
    </div>
  )
}
