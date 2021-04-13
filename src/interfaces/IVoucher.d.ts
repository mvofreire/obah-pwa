export interface IVoucher {
  id: number;
  expiration: Date;
  promotionTitle: string;
  participantName: string;
  promotionImages: string[];
  storeId: number;
  storeImage: string;
  storeName: string;
}
