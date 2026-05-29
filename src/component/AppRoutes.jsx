import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './common/Layout'
import Home from './pages/Home'
import '../App.css'
import About from './folder/about/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Gallery from '../component/folder/Gallery'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>}/>
        {/* <Route path='services' element={<Services/>}/> */}
        <Route path='contact' element={<Contact/>}/>
        {/* <Route path='infrastructure' element={<Infrastructure/>}/> */}
        <Route path='products' element={<Products/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        {/* <Route path='faq' element={<Faq/>}/> */}
      </Route>
    </Routes>
  )
}