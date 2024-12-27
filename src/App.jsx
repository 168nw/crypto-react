import React from 'react';
import {Layout } from 'antd';
import AppHeader from './component/layout/AppHeader';
import AppSlider from './component/layout/AppSider';
import AppContent from './component/layout/AppContent';
import { CryptoContextProvider } from './component/contex/CryptoContext.jsx';



const App = () => (
 <CryptoContextProvider>
 <Layout>
  <AppHeader/>
    <Layout>
      <AppSlider/>
      <AppContent/>
      </Layout>
  </Layout>
 </CryptoContextProvider>



);
export default App;
