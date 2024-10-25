import { ProductService } from "../products/services/product.service";

export const APP_CONSTANTS = {
    PRODUCT_SERVICE_TOKEN: 'PRODUCT_SERVICE_TOKEN',
    PRODUCT_SERVICE_TYPE: ProductService,
    PRODUCT_SERVICE_URL: 'http://localhost:3003/products',
    AUTH_SERVICE_URL: 'http://localhost:3003/auth'
}