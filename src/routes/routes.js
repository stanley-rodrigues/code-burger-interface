import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoutes from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />

        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoutes isAdmin />}>
          <Route element={<Admin />} path={paths.Order} />
          <Route element={<Admin />} path={paths.Products} />
          <Route element={<Admin />} path={paths.NewProduct} />
          <Route element={<Admin />} path={paths.EditProduct} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
