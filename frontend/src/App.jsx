import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";
import * as wp from "./pages";

const router = createBrowserRouter([
  // Website related starts ------
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <wp.Home /> },

      // { path: "/about", element: <About /> },
      // { path: "/services", element: <Services /> },
      // { path: "/blog", element: <Blog /> },
      // { path: "/pages", element: <Pages /> },
      // { path: "/contact-us", element: <ContactUs /> },
      // { path: "/login", element: <Login />, action: otpLogin },
    ],
  },
  { path: "/login", element: <wp.Login /> },
  // Website related ends ------
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
