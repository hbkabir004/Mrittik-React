import { RouterProvider } from 'react-router-dom';
import './App.css';
// import './assets/css/bootstrap-icons.css';
import './assets/css/style.css';
import { routes } from './Routes/Router';


function App() {
  return (
    <div>
      {/* <Loader></Loader> */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
