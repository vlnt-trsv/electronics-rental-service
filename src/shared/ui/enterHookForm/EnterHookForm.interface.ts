export interface IAddress {
    country: string;
    city: string;
    street: string;
    house: string;
}

export interface IShippingField {
    email: string;
    tel: string;
    nickname: string;
    address: IAddress;
}