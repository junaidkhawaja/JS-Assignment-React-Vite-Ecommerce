function TextImage(props) {
return <>
<div className="text-image-section">

    <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="image-block">
                        <img src={props.image} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content-block">
                        <h4>{props.subtitle}</h4>
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                        <button className="btn btn-outline-warning">{props.button}</button>
                    </div>
                </div>
            </div>
    </div>
</div>
</>
}

export default TextImage