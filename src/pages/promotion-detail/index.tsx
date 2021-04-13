import React, { useCallback } from "react";
import { Button, PageHeader, Spin } from "antd";
import { ConditionalRender, Content, Image } from "components";
import { usePromotion } from "hooks/promotion.hook";
import { useParams, useHistory, Link } from "react-router-dom";
import useStyles from "./style";
import { useVoucherCreate } from "hooks/vouchers.hook";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const PromotionDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = usePromotion(id);
  const mutation = useVoucherCreate();

  const handleCreateVoucher = useCallback(() => {
    mutation.mutate(id);
  }, [mutation, id]);
  console.log(!!data && !!data.position);
  return (
    <Spin spinning={isLoading}>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.banner}>
            <Image src={data?.images[0].path} cover height={200} />
          </div>
          <PageHeader
            className={classes.pageHeader}
            onBack={history.goBack}
            title={data?.title}
            subTitle={data?.sub_title}
          />
        </div>
        <Content padding={[10, 20]}>
          <ConditionalRender condition={!isLoading}>
            <ConditionalRender
              condition={!data?.isParticipating}
              elseRender={
                <Link to={`/voucher/${data?.voucherId}`}>Ver meu Voucher</Link>
              }
            >
              <Button type="primary" block onClick={handleCreateVoucher}>
                Usar voucher
              </Button>
            </ConditionalRender>
          </ConditionalRender>
        </Content>
        {!!data && data.position !== null && (
          <Content>
            <div style={{ height: 300 }}>
              <MapContainer
                style={{ height: "100%" }}
                center={
                  [data?.position.lat, data?.position.lng] as LatLngExpression
                }
                zoom={13}
                scrollWheelZoom={false}
                dragging={false}
                zoomControl={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={
                    [data?.position.lat, data?.position.lng] as LatLngExpression
                  }
                />
              </MapContainer>
            </div>
            <Button type="default" block>
              Obter Rotas
            </Button>
          </Content>
        )}
      </div>
    </Spin>
  );
};

export default PromotionDetail;
