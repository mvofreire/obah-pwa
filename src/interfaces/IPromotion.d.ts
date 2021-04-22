import { IStore } from "./IStore";
import { IImage } from "./Image";

export interface IPromotion {
  id: number;
  title: string;
  sub_title: string;
  description: string;
  start_date: string;
  end_date: string;
  user_id: number;
  isParticipating: boolean;
  position_lat: number;
  position_lng: number;
  created_at: string;
  updated_at: string;
  voucherId: number;
  status: "0" | "1";
  is_removed: "0" | "1";
  images: IImage[];
  store: IStore;
}
