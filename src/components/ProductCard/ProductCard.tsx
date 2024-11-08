import React from 'react';
import styles from './styles.module.css';
import { ProductCardProps } from '../../types/types';


export default function ProductCard ({ product, onClick }: ProductCardProps) {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <div className={styles.imageContainer}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.img}/>
        ) : (
          <div className={styles.noImage}>Изображение отсутствует</div>
        )}
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p>Количество: {product.quantity} {product.unit}</p>
      <p>Единица измерения: {product.unit}</p>
      <p>Категория: {product.category}</p>
    </div>
  );
}


