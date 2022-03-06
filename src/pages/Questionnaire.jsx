import {
  Form,
  Select,
  InputNumber,
  Radio,
  Slider,
  Button,
  Space,
} from 'antd';

import { Alert } from 'antd';
import { Progress } from 'antd';

import 'antd/dist/antd.css';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};


export default function questionnaire(){
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      // style={{
      //   display: 'flex'
      //   fl
      // }}
    >
    <Progress percent={20} status="active" />
      
      <Form.Item label="Let Us Begin">
        <span className="ant-form-text">Please answer the following question</span>
      </Form.Item>

      <Form.Item
        name="sex"
        label="Sex"
        rules={[
          {
            // required: true,
            message: 'Please select your sex!',
          },
        ]}
      >
        <Select placeholder="select your sex">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>

      {/* <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[
          {
            required: true,
            message: 'Please select your favourite colors!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item> */}

      <Form.Item name="slider" label="How healthy do you consider yourself?">
        <Slider
          style={{width: '80%', marginLeft: '30px'}}
          marks={{
            0: "Very Poor",
            25: '',
            50: 'Average',
            75: '',
            100: 'Excellent',
          }}
        />
      </Form.Item>

      <Form.Item name="radio-group" label="In general, how would you rate your mental health, 
        including your mood and your ability to think?">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="a">Poor</Radio>
            <Radio value="b">Fair</Radio>
            <Radio value="c">Good</Radio>
            <Radio value="d">Very Good</Radio>
            <Radio value="e">Excellent</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="radio-group1" label="Do you wish to receive recommendations near your geo-location?">
        <Radio.Group>
        <Space direction="vertical">
          <Radio value="a">No</Radio>
          <Radio value="b">Yes</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      {/* <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item> */}
    
      <Alert
      message="Warning"
      description="IF YOU REQUIRE IMMEDIATE MEDICAL ATTENTION - PLEASE CALL 911 OR YOUR LOCAL EMERGENCY NUMBER"
      type="warning"
      showIcon
      closable
       />
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit" href="/questionnaire2">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
};

