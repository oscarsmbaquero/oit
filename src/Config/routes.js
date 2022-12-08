
import Contact from '../pages/Contact/Contact';
import Cv from '../pages/Cv/Cv';
import Home from '../pages/Home/Home'





const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cv",
    element: <Cv/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  
  
  
];

export default routes;