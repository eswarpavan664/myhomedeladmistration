import React from 'react'
import baner1 from '../images/Screenshot.png'
import baner2 from '../images/food-banner-design-template-2a1a5a8354fdd52ce97926689e55a1fa_screen.jpg'
import baner3 from '../images/food-delivery-app-1.webp'
function Baners() {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={baner1} alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={baner2} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={baner3} alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>
  )
}

export default Baners;