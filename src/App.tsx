import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthorizationStore } from './stores/useAuthorizationStore';
import Login from './pages/login';
import NotFound from './pages/notfound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  const queryClient = new QueryClient();

  return (
    <>
    <div className='bg-slate-200'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="relative">
            {authorized && (
              <div className="fixed top-0 left-0 bottom-0 w-64 h-full">
                <Sidebar />
              </div>
            )}
            <div className={authorized ? 'ml-64' : ''}>
              <div className="container mx-auto px-4 p-4 bg-slate-200">
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
              </div>
            </div>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
