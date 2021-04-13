import React, { useCallback } from "react";
import { Content } from "components";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { makeLogin } from "services/auth.service";
import useStyles from "./styles";
import { useAppContext } from "contexts/app.context";
import { Page } from "./enums";

type LoginPageProps = {
  changePage: (page: Page) => void;
};
const LoginPage: React.FC<LoginPageProps> = ({ changePage }) => {
  const classes = useStyles();
  const { setUserSession } = useAppContext();

  const handleFormSubmit = useCallback(
    async (values) => {
      const { email, password } = values;
      try {
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembre-se de mim</Checkbox>
            </Form.Item>

            <br />
            <br />

            <Link className="login-form-forgot" to="#">
              Esqueci minha senha
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.btnLogin}
            >
              Log in
            </Button>
            Ou
            <Button onClick={() => changePage(Page.Register)} type="link">
              Cadastre-se Agora!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default LoginPage;
