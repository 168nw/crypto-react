import {Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import  {useCrypto} from '../contex/CryptoContext.jsx';
import { useEffect, useState } from 'react';
import CoinInfoModal from './CoininfoModal.jsx';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    heught: 60,
    padding: '1rem',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
  };


export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState()
  const [coin, SetCoin] = useState(null)
  const [drawer, SetDrawer] = useState(false)
  const {crypto} = useCrypto()
    
  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/'){
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress',keypress)
    return () => document.removeEventListener('keypress',keypress)
  }, [])

    function handleSelect(value) {
      SetCoin(crypto.find((c) => c.id === value))
      setModal(true)
    }
    
    return (<Layout.Header style={headerStyle}>
      <Select
    style={{
      width: 250,
    }}
    open={select}
    onSelect={handleSelect}
    onClick={() => setSelect((prev) => !prev)}
    value='press / to open'
    options={crypto.map(coin => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon,
    }))}
    optionRender={(option) => (
      <Space>
        <img 
          style={{width: 20}}  
          src={option.data.icon} 
          alt={option.data.label}
        />
        {' '} 
        {option.data.label}
      </Space>
    )}
  />
  <Button type="primary" onClick={() => SetDrawer(true)}>Add asset</Button>
  <Modal
    open={modal}
    onCancel={() => setModal(false)}
    footer={null}
    >
      <CoinInfoModal coin={coin }/> 
      </Modal>
      <Drawer title="Add Asset" width={600} onClose={() => SetDrawer(false) } open={drawer}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    </Layout.Header>
    )
}