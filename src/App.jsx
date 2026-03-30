import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ProductList from './pages/productList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/products' element={<ProductList />}></Route>
            <Route path='/products/:id' element={<ProductInfo />}></Route>
            <Route path='/add-product' element={<AddProduct />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
