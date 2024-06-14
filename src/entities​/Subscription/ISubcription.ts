export interface ISubscriptionData {
  _id: string;
  status: string;
  rentalDate: string;
  startDate: string;
  endDate: string;
  deliveryCost: number;
  deliveryMethod: string;
  subscriptionOptions: {
    _id: string;
    name: string;
    price: number;
    duration: number;
  };
  device: {
    _id: string;
    name: string;
    deviceImage: string;
  };
  category: {
    _id: string;
    name: string;
  };
}

export interface ISubscription extends ISubscriptionData {
  [x: string]: any; 
}
