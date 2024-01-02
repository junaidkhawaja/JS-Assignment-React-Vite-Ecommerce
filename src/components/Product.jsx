function Product(props) {
return <>
<div className="col-md-3 product-card">
    <div className="image-container">
        <div className="sales-tag">{props.sale}</div>
<img src={props.image} />
</div>
<div className="vendor">{props.vendor}</div>
<h3 className="title">{props.title}</h3>
<div className="price">${props.price}</div>
<div className="atc-btn"><button>+ Add to Cart</button></div>
</div>
</>
}
export default Product