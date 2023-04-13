import { RouterProvider } from 'react-router-dom';
import 'react-select2-wrapper/css/select2.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';
import Loader from './Pages/Shared/Loader';
import ThemeSwitcher from './Pages/Shared/ThemeSwitcher';
import { routes } from './Routes/Router';
import './assets/css/style.css';



function App() {
//   Aos.init({
//     delay: 50, // values from 0 to 3000, with step 50ms
//     duration: 800, // values from 0 to 3000, with step 50ms
//     easing: 'ease-in-out',
//     once: true,
// })
  return (
    <div>
      <Loader/>
      <ThemeSwitcher/>
      <RouterProvider router={routes} /> 
    </div>
  );
}

export default App;