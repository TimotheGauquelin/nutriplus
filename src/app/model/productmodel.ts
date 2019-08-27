import { Product } from './productinsidemodel';

export interface ProductResponse {
 code: number;
 status_verbose: string;
 status: number;
 product: Product;
}
