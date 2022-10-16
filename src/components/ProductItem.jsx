import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  const thatImageWorks = product.images[0].startsWith('https');
  if (thatImageWorks) {
    return (
      <div className={styles.ProductItem}>
        <Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
        <div className={styles['product-info']}>
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
            <Image src={addToCartImage} alt="" />
          </figure>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductItem;
