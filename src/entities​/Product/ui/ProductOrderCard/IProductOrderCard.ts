import { IProduct } from "@/entities​/Product/IProduct";
import { ICategories } from "@/entities​/Categories/ICategories";
import { ISubscription } from "@/entities​/Subscription/ISubcription";

export interface CardUpProps {
  visible: boolean;
  selectedProduct: IProduct;
  selectedCategory: ICategories;
  selectedSubscription: ISubscription;
  totalPrice: number;
  getImage: (fileName: string) => void;
}

export interface CardDownProps {
  deliveryMethod: string;
  onDeliveryMethodChange: (method: string) => void;
  selectedProduct: IProduct;
  selectedSubscription: ISubscription;
}

export interface IRental {
  userId: string;
  deviceId: string;
  subscriptionOptionsId: string;
  deliveryMethod: string;
}
