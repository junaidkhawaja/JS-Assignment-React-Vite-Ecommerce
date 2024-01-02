import cart_icon from '../assets/shopping-bag.svg'
import search_icon from '../assets/search.svg'

function Cart() {
return <>
<div class="cart-icon">
<img src={cart_icon} /> (2) Items
</div>
<div class="search-icon">
<img src={search_icon} />
</div>
</>
}
export default Cart