<template>
  <div class="home">
    <img src="./../assets/graphics/airbean-landing.svg" alt="logo" @click="gotoMenu">
  </div>
</template>

<script>


export default {
  name: 'Home',
 methods:{
   gotoMenu(){
     this.$router.push('/Menu')
   }
 }
}
</script>
<style  lang=scss scoped>
.home{
  width:500px;
  height: 100vh;
  background-color: #339966;
  background-repeat:no-repeat;
  background-position:top left,top right;
  background-size:50% ,50%;
  background-image:url("../assets/graphics/intro-graphic-left.svg"),
  url("../assets/graphics/intro-graphic-right.svg");
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
