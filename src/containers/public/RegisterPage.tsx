import React, { useCallback } from "react";
import { Content } from "components";
import { Form, Input, Button } from "antd";
import { makeLogin, registerUser } from "services/auth.service";
import useStyles from "./styles";
import { useAppContext } from "contexts/app.context";
import { Page } from "./enums";

type RegisterPageProps = {
  changePage: (page: Page) => void;
};
const RegisterPage: React.FC<RegisterPageProps> = ({ changePage }) => {
  const classes = useStyles();
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
      }
    },
    [setUserSession]
  );

  return (
    <Content center>
      <div className={classes.login}>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Por Favor! insira o seu nome!" },
            ]}
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
            rules={[
              { required: true, message: "Por Favor! insira sua senha!" },
            ]}
          >
            <Input placeholder="Senha" type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.btnLogin}
            >
              Cadastrar
            </Button>
            Ou
            <Button onClick={() => changePage(Page.Login)} type="link">
              Voltar para Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default RegisterPage;
