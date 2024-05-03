import { ProductType } from './Product'

export type CartItem = ProductType & {
    quantity: number
}