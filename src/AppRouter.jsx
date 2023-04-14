import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage, SecondaryPage} from "./pages/"
import { Header } from './components/Header/Header';

export const AppRouter = () => {
  return (
  <Routes>
<Route path="/" element={<Header/>}> 
<Route index element={<HomePage/>}></Route>

<Route path='/:id' element={<SecondaryPage/>}></Route>'

</Route>
<Route path="*" element={<Navigate to="/" />} />




  </Routes>
  )
}
