import { product } from './product';
export interface consignment {
    id?: number;
    product?: product;
    quantity?: number;
    importDate?: Date;
    exportDate?: Date;
    tax?: string;
}