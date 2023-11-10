import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LoginPanel from "./pages/LoginPanel";
import TestPanel from "./pages/TestPanel";
import { useAuthorizationStore } from "./stores/useAuthorizationStore";

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {authorized ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<TestPanel />} />
            </>
          ) : (
            <Route path="/" element={<LoginPanel />} />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
