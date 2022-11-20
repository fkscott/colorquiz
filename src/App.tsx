import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

import {
  RecoilRoot
} from 'recoil';

function App() {


  return(
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="quiz" element={<Quiz></Quiz>}></Route>
          <Route path="results" element={<Results></Results>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>    
  );
}

export default App;
