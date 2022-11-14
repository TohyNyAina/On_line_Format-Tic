import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"



import Login from "./views/auth/Login"
import Loginclient from './views/auth/Loginclient';
import Footer from './components/Footers/footer';
import Auth from './views/auth/auth';

//Admin
import Accueil from './views/admin/Accueil';
import Apropos from './views/admin/Apropos';
import Formation from './views/admin/Formation';
import Contact from './views/admin/Contact';


//Client
import AccueilClient from './views/client/AccueilClient';
import AproposClient from './views/client/AproposClient';
import FormationClient from './views/client/FormationClient';
import Contactclient from './views/client/ContactClient';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/loginclient' element={<Loginclient />} />
        <Route path='/' element={<Auth />} />
      </Routes>

      <div>
        {/* routes admin */}
        <Routes>
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/formation' element={<Formation/>}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>

      <div>
        {/* routes client */}
        <Routes>
          <Route path='/accueilclient' element={<AccueilClient />} />
          <Route path='/aproposclient' element={<AproposClient />} />
          <Route path='/formationclient' element={<FormationClient/>}/>
          <Route path='/contactclient' element={<Contactclient />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
