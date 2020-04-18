<template>
  <div class="profile">
     <header>
      <img src="../assets/graphics/graphics-header.svg" class="image" />
     <Hamburger/>
    </header>  
    <Login/>  
  </div>
</template>

<script>
import Login from "../components/Login"
import Hamburger from "../components/Hamburger"
export default {
 components:{
     Login,
     Hamburger
     
 }
}
</script>

<style lang =scss scoped>
.profile{
    background: #331a00;
    height: 100vh;
    width: 500px;
    position: relative;
    .image{
        width:500px;


    }
}

</style>