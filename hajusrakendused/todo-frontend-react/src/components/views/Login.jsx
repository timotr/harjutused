import { Form, Input, Button, Row, Col, notification } from "antd";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        notification.success({
            message: 'Logged in'
        });
        notification.error({
            message: 'Wrong username or password'
        });
        navigate("/");
    };

    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Col span={4}>
                <h1>Login</h1>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ username: "", password: "" }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}