import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import LayOut from "./Components/LayOut/LayOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  const x = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index:true, element: <Home /> },
        { path: "framework-start/", element: <Home /> },
        { path: "framework-start/About", element: <About /> },
        { path: "framework-start/Contact", element: <Contact /> },
        { path: "framework-start/Portfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
