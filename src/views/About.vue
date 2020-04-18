<template>
  <div class="about">
   <header>
     <img src="../assets/graphics/graphics-header.svg" class="pics">
     <Hamburger/>
   </header>
     <div class="text">
        <h1>Vårt Kaffe</h1>
       <p class="thick">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
   <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. 
    So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
    <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. 
    At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
     </div>
     <img src="../assets/graphics/eva-cortado.jpg" class="eva">
     <h2>Eva Cortado</h2>
     <p class="profil">VD & Grundare</p>
     <footer>
       <img src="../assets/graphics/graphics-footer.svg" class="pics">
     </footer>
  </div>
</template>
<script>
import Hamburger from "../components/Hamburger"
export default {
  components:{ Hamburger
  }
  
}
</script>
<style  lang = scss scoped>
.about{
  position:relative;
  width: 500px;
  
  .text {
    width: 90%;
    margin: auto;
    text-align: left;
  }
  
  background-color: pink;
   .thick {
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
    line-height: 140%;
  }
  .eva {
    width: 7rem;
    height: 7rem;
    border-radius: 999rem;
    margin: 1rem;
  }
  h2 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
  }
  .profil {
   font-weight:lighter;
   font-size:0.8rem;
  }
  .pics{
    height: 100%;
    width: 100%;
  }
  footer {
    height: 100px;
  }
}

</style>
