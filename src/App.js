import { RouterProvider } from 'react-router-dom';
// import './App.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './assets/css/style.css';
import './assets/css/swiper-bundle.min.css';
import ThemeSwitcher from './Pages/Shared/ThemeSwitcher';
import { routes } from './Routes/Router';


function App(props) {
  return (
    <div>
      <ThemeSwitcher/>
      <RouterProvider router={routes} /> || <Skeleton />
      {props.body || <Skeleton count={10} />}
    </div>
  );
}

export default App;
