import React from 'react';
import {Layout } from 'antd';
import AppHeader from './component/layout/AppHeader';
import AppSlider from './component/layout/AppSider';
import AppContent from './component/layout/AppContent';



const App = () => (
 <Layout>
  <AppHeader/>
    <Layout>
      <AppSlider/>
      <AppContent/>
      </Layout>
  </Layout>
);
export default App;
