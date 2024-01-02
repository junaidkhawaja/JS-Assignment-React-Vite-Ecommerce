import Logo from './Logo'
import Navigation from './Menu'
import Cart from './Cart'

function Header() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 500) {
            //clearHeader, not clearheader - caps H
            $(".main-header").addClass("fixed-header");
        }
        else {
            $(".main-header").removeClass("fixed-header")
        }
    }); //missing );
return <>
      <header class="main-header">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-xl-3 col-lg-3">
              <Logo />
            </div>
            <div class="col-xl-7 col-lg-6">
              <Navigation />
            </div>
            <div class="col-xl-2 col-lg-3 position-relative">
              <Cart />
            </div>
          </div>
        </div>
      </header>
</>
}

export default Header