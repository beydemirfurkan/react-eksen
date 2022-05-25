// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../src/css/style.css';
import Index from './pages/Index';
import Services from './pages/Services';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/services' element={<Services/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App