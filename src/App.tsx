import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { useAuthorizationStore } from './stores/useAuthorizationStore'
import Test from './pages/test'
import Login from './pages/login'
import NotFound from './pages/notfound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Users from './pages/users'

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized)
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {authorized ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
              </>
            ) : (
              <Route path="/" element={<Users />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
