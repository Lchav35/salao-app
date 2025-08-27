import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        supabase
          .from('usuarios')
          .select('tipo')
          .eq('id', data.user.id)
          .single()
          .then(({ data }) => {
            if (data?.tipo === 'admin') navigate('/admin/dashboard')
            else navigate('/dashboard')
          })
      } else {
        navigate('/login')
      }
    })
  }, [])

  return <div className="text-center mt-20 text-gray-500">Redirecionando...</div>
}
