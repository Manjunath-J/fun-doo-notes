import Signup from "./contents/Signup";
import Signin from "./contents/Signin";
import Dashboard from "./contents/Dashboard";
import NotesContainer from "./contents/NotesContainer";
import ArchiveContainer from "./contents/ArchiveContainer";
import TrashContainer from "./contents/TrashContainer";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const AuthGuard = ({ Component }) => {
    const navigate = useNavigate();
    const status = localStorage.getItem("Token") ? true : false;
    console.log(status)
    useEffect(() => {
      if (!status) {
        navigate("/", { replace: true });
      }
    }, [status]);

    return status ? <>{Component}</> : <></>;
  };

  const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/dashboard",
      element: <AuthGuard Component={<Dashboard/>}/>,
      children: [
        { path: "notes", index: true, element: <NotesContainer /> },
        { path: "archive", element: <ArchiveContainer /> },
        { path: "trash", element: <TrashContainer /> },
      ],
    },
    
    // {
    // path: "/book/:bookId",
    // element: <BookContainer />,
    // },
  ]);
  return <RouterProvider router={AppRoutes} />;
}

export default App;
