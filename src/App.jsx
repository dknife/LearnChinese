import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:level" element={<Lesson />} />
          <Route path="/quiz/:level" element={<Quiz />} />
          <Route path="/result/:level" element={<Result />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
