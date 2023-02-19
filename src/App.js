import { RouterProvider } from 'react-router-dom';
// import './App.css';
import './assets/css/style.css';
import './assets/css/swiper-bundle.min.css';
import Loader from './Pages/Shared/Loader';
import { routes } from './Routes/Router';


function App() {
  return (
    <div>
      <Loader></Loader>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
