import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ProductList from './pages/productList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'
import { useState } from 'react'

function App() {

  // 로그인 상태관리
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 로그인한 사용자 ID관리
  const [userId, setUserId] = useState("")

  // 로그인 핸들러
  const handleLogin = (userId) => {
    setIsLoggedIn(true); // 로그인 성공시 상태 업데이트
    setUserId(userId); // 로그인한 사용자 아이디
  }

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserId("") // 아이디 초기화
  }

  return (
    <>
      <div>
        <BrowserRouter basename='/product_shop/'>
          <Header isLoggedIn={isLoggedIn} userId={userId} onLogout={handleLogout} />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/products' element={<ProductList />}></Route>
            <Route path='/products/:id' element={<ProductInfo />}></Route>
            <Route path='/add-product' element={<AddProduct />}></Route>
            <Route path='/signin' element={<SignIn onLogin={handleLogin} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
