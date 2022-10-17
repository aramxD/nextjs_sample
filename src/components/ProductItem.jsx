import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  

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

          
          <figure
					className={styles['more-clickable-area']}
					onClick={() => handleClick(product)}
					aria-hidden="true"
				>
					{state.cart.includes(product) ? <Image
						className={styles.disabled, styles['add-to-cart-btn']}
						src={addedToCartImage}
						alt="added to cart"
					/> : <Image className={styles['add-to-cart-btn'], styles.pointer} src={addToCartImage} alt="add to cart" />}
				</figure>


          {/* <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)}>
            <Image src={addToCartImage} alt="" />
          </figure> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductItem;
