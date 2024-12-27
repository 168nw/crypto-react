import React from 'react';
import { CryptoContextProvider } from './component/contex/CryptoContext.jsx';
import AppLayout from './component/layout/AppLayout.jsx';



const App = () => (
 <CryptoContextProvider>
    <AppLayout/>
 </CryptoContextProvider>
);
export default App;
