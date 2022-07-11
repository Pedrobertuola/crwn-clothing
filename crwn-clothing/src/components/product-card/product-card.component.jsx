import { useContext } from 'react';

import './product-card.styles.scss';
import Button from '../button/button.component';
import { Cartcontext } from '../../contexts/cart.context';

const ProductsCard = ({ product }) => {
   const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(Cartcontext);

    const addProductToCart = () => addItemToCart(product)

   return (
   <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>

    </div>);
}

export default ProductsCard;