export enum USER_PROMOTION_STATUS {
  Pending = 0,
  Used = 1,
  Expired = 2,
}

export interface IVoucher {
  id: number;
  expiration: Date;
  promotionTitle: string;
  participantName: string;
  promotionImages: string[];
  storeId: number;
  storeImage: string;
  storeName: string;
  promotionDescription: string;
  status: USER_PROMOTION_STATUS;
  totalParticipants: number;
}
