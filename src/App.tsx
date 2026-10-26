import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import AppLayout from './components/AppLayout'
import FeedPage from './pages/FeedPage'
import GridPage from './pages/GridPage'
import AddPage from './pages/AddPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.FEED} element={<FeedPage />} />
          {/* Переход из плитки: лента начинается с выбранной карточки */}
          <Route path={`${ROUTES.FEED_ITEM}/:id`} element={<FeedPage />} />
          <Route path={ROUTES.GRID} element={<GridPage />} />
          <Route path={ROUTES.ADD} element={<AddPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App