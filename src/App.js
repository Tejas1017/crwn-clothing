import Home from "./components/routes/home.components";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.components";
const Shop = ()=>{
  return (
    <div>
      <h1>Hi, ur in shoping part!</h1>
    </div>
  )
}

const App=() =>  {

  return (
    <Routes>

        <Route path="/" element={<Navigation/>}  >
        <Route index element={<Home/>}   />
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        </Route>

    </Routes>
  );

}
export default App;
