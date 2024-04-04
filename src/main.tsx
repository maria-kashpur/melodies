import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Aside />
      <Header></Header>
      <Home/>
      <Footer />
    </div>
  
      


  </React.StrictMode>,
)
