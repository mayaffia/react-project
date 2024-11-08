
export interface Product {
    id: number,
    name: string,
    description: string,
    category: string,
    quantity: number,
    unit: string,
    image: string,
}

export interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

export interface ModalProps {
    product: Product;
    onClose: () => void;
}


