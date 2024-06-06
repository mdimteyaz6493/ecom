import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './Pages/Home'
import "./Styles/App.css"
import Plp from './Pages/Plp'
import PDP from './Pages/PDP'
import Cart from './Pages/Cart'
import Payment from './Pages/Payment'
import Search_result_product from './Pages/Search_result_product'

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Plp/>}></Route>
        <Route path='/searching_product/:id' element={<Search_result_product/>}></Route>
        <Route path='/product/:id' element={<PDP/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
