import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './css/index.css';
import App from './App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>

);
