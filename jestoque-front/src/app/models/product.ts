export interface Product {
    id?: number;          // O '?' significa que o ID é opcional (o Java que gera)
    name: string;
    description: string;
    price: number;
    quantity: number;
}