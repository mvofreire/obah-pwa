import React, { useCallback, useRef } from "react";
import { Avatar, Button, Divider, List, Space, Typography } from "antd";
import { useAppContext } from "contexts/app.context";
import { changeUserImage } from "services/user.service";
import { Content } from "components";
import { IUser } from "interfaces/IUser";

const ConfigPage = () => { 
  const fileRef = useRef<HTMLInputElement>(null);
  const { logoutUser, user, setUserInformation } = useAppContext();

  const handleChangeImage = useCallback(
    async (e: any) => {
      const { files } = e.target;
      if (!!files[0]) {
        const { data } = await changeUserImage(files[0]);
        setUserInformation(data as IUser);
      }
    },
    [setUserInformation]
  );

  return (
    <Content
      padding={[40, 10]}
      style={{
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size={20}>
        <Avatar size={64} src={user?.image} />
        <Typography.Text type="danger" onClick={() => fileRef.current?.click()}>
          <input
            ref={fileRef}
            onChange={handleChangeImage}
            type="file"
            style={{ visibility: "hidden" }}
          />
          alterar imagem
        </Typography.Text>
        <Typography.Title level={3}>{user?.name}</Typography.Title>
      </Space>
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
