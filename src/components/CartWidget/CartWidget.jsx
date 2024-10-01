import cart from '../../cart.svg';

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget