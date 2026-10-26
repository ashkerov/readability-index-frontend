import type { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'

const LoginPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="page stub-page">
      <p className="stub-text">Раздел в разработке</p>
      <Button variant="dark" className="btn-black-rounded" onClick={() => navigate(ROUTES.FEED)}>
        На главную
      </Button>
    </div>
  )
}

export default LoginPage