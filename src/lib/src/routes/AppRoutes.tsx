import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Index from '../pages/Index'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        {/* Adicione rotas para /dashboard e /admin/dashboard depois */}
      </Routes>
    </BrowserRouter>
  )
}
