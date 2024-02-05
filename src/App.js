import Signup from './contents/Signup';
import Signin from './contents/Signin';
import Dashboard from './contents/Dashboard';
import NotesContainer from './contents/NotesContainer';
import ArchiveContainer from './contents/ArchiveContainer';
import TrashContainer from './contents/TrashContainer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
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
      element: <Dashboard />,
      children: [
        { path: "notes", index: true, element: <NotesContainer/> },
        { path: "archive", element: <ArchiveContainer/> },
        { path: "trash", element: <TrashContainer/> },
      ],
    },
    // {
      // path: "/book/:bookId",
      // element: <BookContainer />,
    // },
  ]);
  return (
    <RouterProvider router={AppRoutes}/>
  );
}

export default App;
