import slide_1 from '../assets/hm1-single-1.png'
import slide_2 from '../assets/hm1-single-2.png'
import Slide from './Slide'

function Slider() {
return <>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-inner">
    <Slide image={slide_1}
    active="active"
    subtitle="30% Off"
    title="Comfort Chair"
    text="Collect from Daxone and get 30% Discount!"
    button="SHOP NOW" />
    <Slide image={slide_2}
    subtitle="40% Off"
    title="Comfort Chair"
    text="Collect from Daxone and get 30% Discount!"
    button="SHOP NOW" />
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
}
export default Slider