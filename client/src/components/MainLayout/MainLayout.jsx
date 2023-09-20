import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import BottomNavbar from '../BottomNavbar/BottomNavbar'
import Sidebar from '../Sidebar/Sidebar';
import SidebarResponsive from '../SidebarResponsive/SidebarResponsive';
import Footer from '../Footer/Footer';

import Inscripciones from '../Sections/Institucion/Inscripciones.jsx'
import LoginLayout from '../LoginLayout/LoginLayout';
import Inicio from '../Sections/Inicio/Inicio.jsx';
import Gao from '../Sections/PlanDeEstudio/Gao.jsx'
import Computacion from '../Sections/PlanDeEstudio/Computacion.jsx'
import CicloBasico from '../Sections/PlanDeEstudio/CicloBasico.jsx'
import PublicacionesSL from '../Sections/Publicaciones/PublicacionesSL.jsx';
import PublicacionesCL from '../Sections/Publicaciones/PublicacionesCL.jsx';
import NuestraHistoria from '../Sections/Institucion/NuestraHistoria.jsx';
import Autoridades from '../Sections/Institucion/Autoridades.jsx';
import PreguntasFrecuentes from '../Sections/PreguntasFrecuentes/PreguntasFrecuentes.jsx';
import NotFound from '../Sections/NotFound/NotFound.jsx';
import './LoginButton.css';
 

function MainLayout() {
  const navigate = useNavigate();
   
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isLaptopResolution, setIsLaptopResolution] = useState(
    window.innerWidth <= 1470
  );

  const [isCellResolution, setIsCellResolution] = useState(
    window.innerWidth <= 480
  );



  function RenderRedirectToPublicacionesCL({ isLoggedIn }) {
    const navigate = useNavigate();
    useEffect(() => {
      if (isLoggedIn && !hasRedirected) {
        navigate('/PublicacionesCL');
        setHasRedirected(true);
      }
    }, [isLoggedIn, navigate, hasRedirected]);
  
    return null;
  }
   
  const handleLogout = () => {
    setIsLoggedIn(false);
    setHasRedirected(false);
    navigate('/'); 
  }
  
  const handleResize = () => {
    const currentWindowWidth = window.innerWidth;
    
    if (currentWindowWidth <= 480) {
      setIsLaptopResolution(false);
      setIsCellResolution(true);
    } else if (currentWindowWidth <= 1470) {
      setIsLaptopResolution(true);
      setIsCellResolution(false);
    } else {
      setIsLaptopResolution(false);
      setIsCellResolution(false);
    }
  };



  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid-container">
      {isLaptopResolution ? <SidebarResponsive/> : null}

      <RenderRedirectToPublicacionesCL isLoggedIn={isLoggedIn} />

      {isCellResolution ?  <BottomNavbar/> : null }

      <Routes>
    
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<LoginLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

        <Route exact path="/PublicacionesSL" element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />} />
        <Route exact path="/PublicacionesCL" element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />} />
        <Route exact path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route exact path="/autoridades" element={<Autoridades />} />
        <Route exact path="/inscripciones" element={<Inscripciones />} />
        <Route exact path="/gao" element={<Gao />} />
        <Route exact path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
       <Route exact path="/computacion" element={<Computacion />} />
        <Route exact path="/ciclo-basico" element={<CicloBasico />} />
        
        <Route exact path="*" element={<NotFound />} />
      </Routes>
       
      <Sidebar isLoggedIn={isLoggedIn} handleLogout={handleLogout}  />
      <SidebarResponsive isLoggedIn={isLoggedIn} handleLogout={handleLogout}  />

      <Footer />
    </div>
  );
}

 
export default MainLayout;
