export default function QuizOption({ text, index, selected, correct, disabled, onClick }) {
  const labels = ['A', 'B', 'C', 'D']

  let className = 'quiz-option w-full p-4 rounded-xl border-2 text-left flex items-center gap-3 font-medium '

  if (selected === index && correct) {
    className += 'quiz-correct text-white border-green-300'
  } else if (selected === index && !correct) {
    className += 'quiz-wrong text-white border-red-300'
  } else if (selected != null && index === correct) {
    className += 'quiz-correct text-white border-green-300'
  } else {
    className += 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
  }

  return (
    <button
      className={className}
      onClick={() => onClick(index)}
      disabled={disabled}
    >
      <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">
        {labels[index]}
      </span>
      <span>{text}</span>
    </button>
  )
}
