import Aos from 'aos';
import 'react-loading-skeleton/dist/skeleton.css';
import { RouterProvider } from 'react-router-dom';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/vertical';
import 'swiper/css/effect-fade';
import "swiper/swiper.min.css";
import './App.css';
import './assets/css/style.css';
import Loader from './Pages/Shared/Loader';
import ThemeSwitcher from './Pages/Shared/ThemeSwitcher';
import { routes } from './Routes/Router';


function App() {
  Aos.init({
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out',
    once: true,
    disable: false,
})
  return (
    <div className='bg-dark'>
      <Loader/>
      <ThemeSwitcher/>
      <RouterProvider router={routes} /> 
      {/* || <Skeleton /> */}
      {/* {props.body || <Skeleton count={10} />} */}
    </div>
  );
}

export default App;
