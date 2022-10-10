import { Header } from "./components/Header";
import Register from "./components/Register";
import SignIn from "./components/SignIng";
import './styles.css';
import Categories from "./views/Categories";
import { CardCampain } from "./components/CardCampain";
import { Campains } from "./views/Campains";
import { Instructions } from "./views/Instructions";
import { Create } from "./views/Create";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { QrModal} from "./components/QrModal";
import { InfoCampain } from "./views/InfoCampain";
import Footer from "./components/Footer";
import HelpCenter from "./views/HelpCenter";





function App() {
  return (
  <>
  <Header/>
  <Routes>
  
  <Route path="/home" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<SignIn/>}/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/campains" element={<Campains/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/create" element={<Instructions/>}/>
  <Route path="/infoCampain" element={<InfoCampain/>}/>
  <Route path="/helpcenter" element={<HelpCenter/>}/>

  </Routes>
  
<Footer/>

  </>
  );
}

export default App;
