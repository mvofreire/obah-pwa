import React from "react";
import { Avatar, Button, Divider, List, Typography } from "antd";
import { useAppContext } from "contexts/app.context";
import { Content } from "components";

const ConfigPage = () => {
  const { logoutUser, user } = useAppContext();

  return (
    <Content
      padding={[40, 10]}
      style={{
        textAlign: "center",
      }}
    >
      <Avatar size={64} src={user?.image} />
      <Typography.Title level={3}>{user?.name}</Typography.Title>
      <Divider />
      <List split={false}>
        <List.Item>Histórico</List.Item>
        <List.Item>Favoritos</List.Item>
      </List>
      <Divider />
      <List split={false}>
        <List.Item>Ajuda</List.Item>
        <List.Item>Configurações</List.Item>
        <List.Item>Sugestões</List.Item>
      </List>
      <Button type="primary" danger block onClick={logoutUser}>
        Sair da minha Conta
      </Button>
    </Content>
  );
};

export default ConfigPage;
