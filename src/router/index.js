import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/404NotFound';
import Home from '../pages/Home';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default Router