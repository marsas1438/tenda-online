import { RatingType } from './Rating'
export interface ProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingType
}