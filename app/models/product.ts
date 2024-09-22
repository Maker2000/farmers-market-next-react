import images from "../images"
import { IEntity } from "./dbEntity"
import { User1, User2 } from "./user"

export class Product extends IEntity {
  id!: string
  name!: string
  description!: string
  imageUrl!: string
  pricePerUnit!: number
  userName!: string
}

export const Products: Product[] = [
  {
    id: "test id",
    name: "Potatoes",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Potato,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id2",
    name: "Yam",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Yam,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id3",
    name: "Cabbage",
    description: "A leafy green that's brilliant when steamed.",
    imageUrl: images.Cabbage,
    pricePerUnit: 20,
    userName: User2.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id",
    name: "Potatoes",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Potato,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id2",
    name: "Yam",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Yam,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id3",
    name: "Cabbage",
    description: "A leafy green that's brilliant when steamed.",
    imageUrl: images.Cabbage,
    pricePerUnit: 20,
    userName: User2.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id",
    name: "Potatoes",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Potato,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id2",
    name: "Yam",
    description: "A ground provision food that's rich in starch.",
    imageUrl: images.Yam,
    pricePerUnit: 20,
    userName: User1.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
  {
    id: "test id3",
    name: "Cabbage",
    description: "A leafy green that's brilliant when steamed.",
    imageUrl: images.Cabbage,
    pricePerUnit: 20,
    userName: User2.userName,
    createdAt: new Date(),
    lastUpdated: new Date(),
    isDeleted: false,
  },
]
