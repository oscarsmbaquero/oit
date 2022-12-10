
import Contact from '../pages/Contact/Contact';
import Cv from '../pages/Cv/Cv';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Proyects';

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
  {
    path: "/projects",
    element: <Projects/>,
  },
  
  
];

export default routes;