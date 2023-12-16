import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthorizationStore } from './stores/useAuthorizationStore'
import Login from './pages/login'
import NotFound from './pages/notfound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Users from './pages/users'
import Navbar from './components/navbar'
import Dashboard from './pages/dashboard'

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized)
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {authorized ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
              </>
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
