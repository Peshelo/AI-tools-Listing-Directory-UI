import { products } from "./products.js";

export default defineEventHandler(async (event) => {
    return {
        products: products   
    }
})
    