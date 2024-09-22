import { IEntity } from "./dbEntity";

export class User extends IEntity {
  id!: string;
  userName!: string;
  firstName!: string;
  lastName!: string;
  occupation!: Occupation;
  userType!: UserType;
  address!: Address;
}
export interface CreateUserDto {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  occupation: Occupation;
  userType: UserType;
  address: Partial<CreateAddressDto>;
}
export enum UserType {
  Consumer = "Consumer",
  Seller = "Seller",
}
export enum Occupation {
  Organization = "Organization",
  SelfSufficientSeller = "Self Sufficient Seller",
}

export const User1: User = {
  id: "userid1",
  userName: "testUser1",
  firstName: "Jean",
  lastName: "Willionson",
  occupation: Occupation.SelfSufficientSeller,
  userType: UserType.Seller,
  createdAt: new Date(),
  lastUpdated: new Date(),
  isDeleted: false,
  address: {
    address1: "123 Notting Lane",
    city: "Nottingham",
    state: "",
    zip: "NG1 1AJ",
    country: "USA",
  },
};
export const User2: User = {
  id: "userid2",
  userName: "testUser2",
  firstName: "John",
  lastName: "Peterson",
  occupation: Occupation.SelfSufficientSeller,
  userType: UserType.Seller,
  createdAt: new Date(),
  lastUpdated: new Date(),
  isDeleted: false,
  address: {
    address1: "New York",
    city: "New York",
    state: "New York",
    zip: "00943",
    country: "USA",
  },
};
