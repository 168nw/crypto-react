import {Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSlider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../contex/CryptoContext';

export default function AppLayout() {
    const {loading} = useContext(CryptoContext)
    
    if (loading) {
        return <Spin fullscreen/>
    }
return (
    <Layout>
        <AppHeader/>
        <Layout>
            <AppSlider/>
            <AppContent/>
        </Layout>
    </Layout>
)
}