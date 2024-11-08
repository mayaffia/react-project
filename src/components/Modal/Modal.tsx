import React from 'react';
import styles from './styles.module.css';
import { ModalProps } from '../../types/types';

export default function Modal({ product, onClose }: ModalProps) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button onClick={onClose} className={styles.close}>Закрыть</button>
          <h2>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <p>Количество: {product.quantity} {product.unit}</p>
          <p>Категория: {product.category}</p>
          <div className={styles.imageContainerModal}>
          {product.image ? (
            <img src={product.image} alt={product.name} className={styles.img}/>
          ) : (
            <div className={styles.noImageModal}>Изображение отсутствует</div>
          )}
          </div>
        </div>
      </div>
    );
  }
  