import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppForm() {
  return (
    <div id="create" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Create a new Discussion</h2>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="Ttitle"
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="Background"
          >
            <TextArea placeholder="Background" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppForm;