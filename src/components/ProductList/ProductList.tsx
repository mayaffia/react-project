import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ProductCard from '../ProductCard/ProductCard';
import Modal from '../Modal/Modal';
import { Product } from '../../types/types';

export default function ProductList() {

    const [products, setProducts] = useState<Product[]>([]);

     useEffect(() => {
       fetch('/data.json')
         .then(response => {
           if (!response.ok) {
             throw new Error('Ошибка');
           }
           return response.json();
         })
         .then(data => setProducts(data))
         .catch(error => console.error('Ошибка загрузки данных:', error));
     }, []);

     
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
    const handleCardClick = (product: Product) => {
      setSelectedProduct(product);
    };
  
    const handleCloseModal = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div>
        <div className={styles.productList}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={handleCardClick} />
          ))}
        </div>
        {selectedProduct && <Modal product={selectedProduct} onClose={handleCloseModal} />}
      </div>
    );
  }