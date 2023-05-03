import Home from "./components/routes/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation.component";
import Autentication from "./components/routes/authentication/auth.components";
import Shop from "./components/routes/shop/shop.components";


const App=() =>  {

  return (
    <Routes>

        <Route path="/" element={<Navigation/>}  >
        <Route index element={<Home/>}   />
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Autentication/>}/>
        </Route>

    </Routes>
  );

}
export default App;
