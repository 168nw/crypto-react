import { useState } from "react"
import { Select, Space, Typography, Flex, Divider, Form, InputNumber, Button, DatePicker} from "antd"
import { useCrypto } from "../contex/CryptoContext"


const validateMassages = {
    required: "${label} is required!",
    types: {
        numbers: "${label} is not valid number",
    },
    number: { 
        range: '${label} must be between S{min} and ${max}'
    },
}

export default function AddAssetForm () {
    const [form] = Form.useForm()
    const {crypto} = useCrypto()
    const [coin, setCoin] = useState()

    if(!coin) {
        return (
            <Select
    style={{
      width: '100%',
    }}
    onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
    placeholder="Select coin"
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
    )
    }
    function onFinish(values) {
        console.log('finish', values)
    }

    function handleAmountChange(value) {
      form.setFieldsValue({
        total: value * coin.price, 
      }
      )  
    }

    return (<>
    <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
            price: +coin.price.toFixed(2),
        }}
        onFinish={onFinish}
        validateMessages={validateMassages}
      >
         <Flex align="center">
                <img 
                    src={coin.icon} 
                    alt={coin.name} 
                    style={{width: 40, marginRight:10}}
                />
                <Typography.Title 
                    level={2} 
                    style={{margin: 0}}
                >
                </Typography.Title>
                <Typography.Title level={2} style={{margin: 0}}>
            {coin.name}
        </Typography.Title>
            </Flex>
        <Divider />
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
            },
          ]}
        >
          <InputNumber 
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
          style={{width: '100%'}}/>
        </Form.Item>
    
        <Form.Item label="Price" name="price">
          <InputNumber disabled tyle={{width: '100%'}} />
        </Form.Item>

        <Form.Item label="Date & Time" name="date">
          <DatePicker showTime/>
        </Form.Item>

        <Form.Item label="Total" name="total">
          <InputNumber disabled tyle={{width: '100%'}}/>
        </Form.Item>
    
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Add Asset
          </Button>
        </Form.Item>
      </Form> </> 
   
)
}