export interface Product {
    id?: number;
    sku: string;
    name: string;
    description?: string; // O '?' torna o campo opcional, resolvendo parte do erro
    salePrice: number;    // Substitui o antigo 'price'
    currentStock: number; // Substitui o antigo 'quantity'
    minStock: number;
    ean?: string;         // Opcional também
}