import React, { useRef, useCallback, useState, useEffect } from "react";
import { Content, ConditionalRender } from "components";
import { Input, Row, Col, Typography, Button, Alert, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { makeLogin, emailExists } from "services/auth.service";
import useStyles from "./styles";
import { useAppContext } from "contexts/app.context";
import { Page, EmailValidation, ErrorMessage } from "./enums";
import { makeLoginWithFacebook } from "utils/facebook";
import peopleImage from "assets/images/people.png";
import facebookIcon from "assets/images/facebook.png";
import googleIcon from "assets/images/google.png";

type LoginPageProps = {
  changePage: (page: Page) => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ changePage }) => {
  const classes = useStyles();
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const { setUserSession } = useAppContext();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<EmailValidation>(
    EmailValidation.NotChecked
  );

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleEmailValidation = useCallback(
    async (e: any) => {
      e.stopPropagation();
      setError("");
      try {
        await emailExists(email);
        setEmailValidation(EmailValidation.Allowed);
        passwordRef.current?.focus();
      } catch (error) {
        setError(ErrorMessage.email);
        setEmailValidation(EmailValidation.Denied);
        emailRef.current?.focus({ cursor: "all" });
      }
    },
    [email]
  );

  const handlePasswordForm = useCallback(async () => {
    setError("");
    try {
      const session = await makeLogin(email, password);
      setUserSession(session);
    } catch (error) {
      console.log(error);
      setError(ErrorMessage.password);
      setEmailValidation(EmailValidation.Denied);
      passwordRef.current?.focus({ cursor: "all" });
    }
  }, [setUserSession, email, password]);

  const handleFacebookLogin = useCallback(() => {
    makeLoginWithFacebook();
  }, []);

  const handleGoogleLogin = useCallback(() => {}, []);

  return (
    <Content padding={[30, 0]} className={classes.root}>
      <div>
        <img
          src={peopleImage}
          alt="People"
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
      <Content padding={20} style={{ textAlign: "center" }}>
        <ConditionalRender condition={!!error}>
          <Alert message={error} type="error" style={{ marginBottom: 20 }} />
        </ConditionalRender>
        <ConditionalRender
          condition={[
            EmailValidation.NotChecked,
            EmailValidation.Denied,
          ].includes(emailValidation)}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Typography.Text>Insira seu e-mail</Typography.Text>
            <Input
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              allowClear
              onPressEnter={handleEmailValidation}
              addonAfter={
                <ArrowRightOutlined onClick={handleEmailValidation} />
              }
            />
            <ConditionalRender
              condition={emailValidation === EmailValidation.Denied}
            >
              <Button
                type="link"
                block
                onClick={(_) => changePage(Page.Register)}
              >
                Criar uma nova conta
              </Button>
            </ConditionalRender>
            <Typography.Text>- Ou utilize outro metodo -</Typography.Text>
            <Content padding={[20, 0, 30, 0]}>
              <Row align="middle" justify="center">
                <Col xs={12}>
                  <Content center direction="vertical">
                    <img
                      src={facebookIcon}
                      alt="facebookIcon"
                      onClick={handleFacebookLogin}
                    />
                    <Typography.Text>Facebook</Typography.Text>
                  </Content>
                </Col>
                <Col xs={12}>
                  <Content center direction="vertical">
                    <img
                      src={googleIcon}
                      alt="google"
                      onClick={handleGoogleLogin}
                    />
                    <Typography.Text>Google</Typography.Text>
                  </Content>
                </Col>
              </Row>
            </Content>
          </Space>
        </ConditionalRender>
        <ConditionalRender
          condition={emailValidation === EmailValidation.Allowed}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Typography.Text type="secondary">Email: {email}</Typography.Text>
            <Input
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              type="password"
              onPressEnter={handlePasswordForm}
            />
            <Button type="primary" block onClick={handlePasswordForm}>
              Login
            </Button>
          </Space>
        </ConditionalRender>
      </Content>
    </Content>
  );
};

export default LoginPage;
