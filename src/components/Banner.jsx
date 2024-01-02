function Banner(props) {

    return <>
    <div class="banner-section">
        <div class="container">
            <div class="row">
                <div className="banner-inner">
                <img src={props.image} style={{width:"100%"}} />
                <div class="banner-content">
                    <h3>{props.title}</h3>
                    <a className="btn btn-outline-warning" href={props.link}>{props.link_text}</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Banner