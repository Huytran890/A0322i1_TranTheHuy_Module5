import { product } from './product';

export interface consignment {
    id?: number;
    idConsignment?: string;
    quantity?: number;
    tax?: string;
    importDate?: Date;
    exportDate?: Date;
    product?: product;
}