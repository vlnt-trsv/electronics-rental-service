import { Product } from "../ProductCard/ProductCardInterface";
import { Categories } from "../../../Categories/ui/CategoriesCard/CategoriesCardInterface";
import { Subscription } from "../../../Subscription/ui/SubscriptionCard/SubscriptionCardInterface";

export interface CardUpProps {
    visible: boolean;
    selectedProduct: Product; 
    selectedCategory: Categories; 
    selectedSubscription: Subscription;
    totalPrice: number;
    getImage: (fileName: string) => void;
  }
  
  export interface CardDownProps {
    deliveryMethod: string;
    onDeliveryMethodChange: (method: string) => void;
    selectedProduct: Product;
    selectedSubscription: Subscription;
  }
  