export interface IProduct {
    [x: string]: any;
    name: string;
    subtitle: string;
    price: string;
    imageUrl: string;
    altText: string;
    onClick: () => void;
  }