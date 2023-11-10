import { Button } from "@/components/ui/button";
import { logoutUser, useAuthorizationStore } from "@/stores/useAuthorizationStore";
import { Form, Link, Outlet, RouterProvider, createBrowserRouter, redirect, useActionData, useFetcher, useLocation, useNavigation, useRouteLoaderData } from "react-router-dom";
function Home() {
  const username = useAuthorizationStore((state) => state.username);

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4"></div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{username}</h2>
        </div>
        <Button
          onClick={() => {
            logoutUser();
          }}
        >
          Log out
        </Button>
        <ul>
          <li>
            <Link to="/test">Go to test panel</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
