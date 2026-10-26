import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../routes'

interface Tab {
  label: string
  to: string
  isActive: boolean
  disabled?: boolean // Добавили флаг неактивности
}

const TabBar: FC = () => {
  const { pathname } = useLocation()

  const tabs: Tab[] = [
    {
      label: 'Лента',
      to: ROUTES.FEED,
      isActive: pathname === ROUTES.FEED || pathname.startsWith(`${ROUTES.FEED_ITEM}/`),
    },
    { label: 'Добавление', to: ROUTES.ADD, isActive: false, disabled: true }, // Сделали заглушкой
    { label: 'Плитка', to: ROUTES.GRID, isActive: pathname === ROUTES.GRID },
    { label: 'Вход', to: ROUTES.LOGIN, isActive: false, disabled: true }, // Сделали заглушкой
  ]

  return (
    <nav className="bottom-tab-bar">
      {tabs.map((tab) => {
        // Если вкладка заблокирована, рендерим обычный span вместо ссылки
        if (tab.disabled) {
          return (
            <span key={tab.label} className="tab-link disabled">
              {tab.label}
            </span>
          )
        }
        
        // Активные вкладки рендерим как ссылки
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={tab.isActive ? 'tab-link active' : 'tab-link'}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default TabBar