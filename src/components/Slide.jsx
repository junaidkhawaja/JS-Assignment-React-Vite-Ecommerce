import bg_image from '../assets/hm1-bg-1.png'
function Slide(props) {
return <>
    <div className={'carousel-item ' + props.active}>

    <img src={bg_image} class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block">
        <div className="container">
            <div className='row d-flex align-items-center'>
                <div className='col-md-6'>
                <img src={props.image} class="d-block w-100" />
                </div>
                <div className='col-md-6'>
                <h5>{props.subtitle}</h5>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button className='btn btn-outline-warning'>{props.button}</button>
                </div>
            </div>
        </div>
      </div>
    </div>

</>
}
export default Slide