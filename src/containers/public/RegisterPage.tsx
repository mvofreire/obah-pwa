import React, { useCallback, useState } from "react";
import { ConditionalRender, Content, LogoRed } from "components";
import { Form, Input, Button, Space, Typography, Alert } from "antd";
import { makeLogin, registerUser } from "services/auth.service";
import useStyles from "./styles";
import { useAppContext } from "contexts/app.context";
import { ErrorMessage, Page } from "./enums";

type RegisterPageProps = {
  changePage: (page: Page) => void;
};
const RegisterPage: React.FC<RegisterPageProps> = ({ changePage }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { setUserSession } = useAppContext();

  const handleFormSubmit = useCallback(
    async (values) => {
      const { name, email, password } = values;
      try {
        await registerUser(name, email, password);
        const session = await makeLogin(email, password);
        setUserSession(session);
      } catch (error) {
        console.log(error);
        setError(ErrorMessage.registerError);
      }
    },
    [setUserSession]
  );

  return (
    <Content padding={20} center direction="vertical">
      <LogoRed style={{ marginBottom: 30 }} />
      <ConditionalRender condition={!!error}>
        <Alert message={error} type="error" style={{ marginBottom: 30 }} />
      </ConditionalRender>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={handleFormSubmit}
        style={{ width: "100%" }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Por Favor! insira o seu nome!" }]}
        >
          <Input placeholder="Nome" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Por Favor! insira o seu e-mail!" },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Por Favor! insira sua senha!" }]}
        >
          <Input placeholder="Senha" type="password" />
        </Form.Item>
        <Form.Item>
          <Space
            direction="vertical"
            style={{ width: "100%", textAlign: "center", marginTop: 30 }}
          >
            <Button
              type="primary"
              block
              htmlType="submit"
              className={classes.btnLogin}
            >
              Cadastrar
            </Button>
            <Typography.Text type="secondary">Ou</Typography.Text>
            <Button onClick={() => changePage(Page.Login)} type="link">
              Voltar para Login
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default RegisterPage;
