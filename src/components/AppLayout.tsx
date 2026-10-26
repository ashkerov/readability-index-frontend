import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import TabBar from './TabBar'

const AppLayout: FC = () => (
  <div className="app-container">
    <Outlet />
    <TabBar />
  </div>
)

export default AppLayout