
import './assets/css/style.css'

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>


    </>
  )
}

export default App
