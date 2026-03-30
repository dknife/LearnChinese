import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🐼</span>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-game-yellow to-game-orange bg-clip-text text-transparent">
                中文会话
              </h1>
              <p className="text-xs text-white/60">중국어 생활회화</p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            🏠 홈
          </Link>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}
