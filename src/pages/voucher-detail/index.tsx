import React, { useCallback, useState } from "react";
import { useVoucher } from "hooks/vouchers.hook";
import { Link, useHistory, useParams } from "react-router-dom";
import { getStorage, setStorage, removeStorage } from "utils/storage";
import {
  Button,
  Carousel,
  Divider,
  Empty,
  Modal,
  PageHeader,
  Space,
  Spin,
  Typography,
} from "antd";
import {
  Content,
  Icon,
  Icons,
  Image,
  SectionContent,
  PullToRefresh,
  ConditionalRender,
} from "components";
import QRCode from "qrcode.react";
import { IVoucher } from "interfaces/IVoucher";

const VoucherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const storageKey = `voucher-${id}`;

  const history = useHistory();
  const { data, isLoading, refetch } = useVoucher(id);
  const [isLocalSaved, setIsLocalSaved] = useState<boolean>(
    getStorage(storageKey) ? true : false
  );
  const [isRecoveringVoucher, setIsRecoveringVoucher] = useState<boolean>(
    false
  );

  const handleUseVoucher = useCallback(async () => {
    setIsRecoveringVoucher(true);

    setTimeout(() => {
      Modal.success({
        title: "Aqui esta, aproveite!",
        content: (
          <Space direction="vertical" size={20} split={<Divider />}>
            <Typography.Text type="secondary">
              Apresente esse Voucher no momento de pagar a conta
            </Typography.Text>
            <QRCode size={200} value={JSON.stringify(data)} />
          </Space>
        ),
        centered: true,
        okText: "Fechar",
        onOk() {
          setIsRecoveringVoucher(false);
        },
      });
    }, 1000);
  }, [data]);

  const handleShareWithFriends = useCallback(() => {
    Modal.success({
      title: "Conecte-se com suas redes sociais",
      centered: true,
      content:
        "Para compartilhar com seus amigos, você precisa conectar à suas redes sociais!",
      onOk() {},
    });
  }, []);

  const handleLocalStoreVoucher = useCallback(() => {
    const value = getStorage(storageKey) || false;

    if (!!value) {
      removeStorage(storageKey);
      setIsLocalSaved(false);
    } else {
      setStorage(storageKey, data);
      setIsLocalSaved(true);
    }
  }, [data, setIsLocalSaved, storageKey]);

  return (
    <PullToRefresh onRefresh={refetch}>
      <>
        <SectionContent sectionKey="header-actions">
          <Space>
            <ConditionalRender
              condition={isLocalSaved}
              elseRender={
                <Icon
                  name={Icons.CloudDownloadOutlined}
                  onClick={handleLocalStoreVoucher}
                />
              }
            >
              <Icon
                name={Icons.DeleteColumnOutlined}
                onClick={handleLocalStoreVoucher}
              />
            </ConditionalRender>
            <a href="https://wa.me/123" target="_blank" rel="noreferrer">
              <Icon name={Icons.WhatsAppOutlined} />
            </a>
          </Space>
        </SectionContent>
        <Spin spinning={isLoading}>
          <PageHeader title={data?.promotionTitle} onBack={history.goBack} />
          <Carousel>
            {data?.promotionImages.map((image: string, i: number) => (
              <div key={`voucher-image-${i}`}>
                <Image src={image} height={150} cover />
              </div>
            ))}
          </Carousel>
          <Content padding={10}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Typography.Text type="secondary" ellipsis>
                {data?.promotionDescription}
              </Typography.Text>
              <Typography.Text type="secondary">
                <strong>Participants:</strong> ({data?.totalParticipants})
              </Typography.Text>
              <Button
                type="primary"
                block
                loading={isRecoveringVoucher}
                onClick={handleUseVoucher}
              >
                Resgatar Cupom
              </Button>
              <Button type="default" block onClick={handleShareWithFriends}>
                Convidar meus amigos
              </Button>
            </Space>
          </Content>
        </Spin>
      </>
    </PullToRefresh>
  );
};

export default VoucherDetail;
