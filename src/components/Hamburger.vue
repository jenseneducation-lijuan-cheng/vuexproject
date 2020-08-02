<template>
  <div class="top-burger">
    <div class="hamburger" @click="showMenu = ! showMenu">
        <img src ="../assets/graphics/close.svg" alt="close" v-if="showMenu"/>
      <img src="../assets/graphics/navicon.svg" alt="hamburger" v-else />
    </div>
    <div class="overL" v-if="showMenu">
    
      <h1 class="router btn" @click="goTo('/Menu')">Meny</h1>
     
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/about')">Vårt kaffe</h1>
      
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/orderStatus') ">Order status</h1>
     
      <div class="line"></div>
      <h1 class="router btn" @click="goTo('/profile')">Min Profil</h1>
    
    </div>
  </div>
</template>

<script>
export default {
    data:()=>({
        showMenu:false

    }),
  methods: {
    goTo(path) {
      this.$router.push(path)
      // när man är i samma sidan ska tänga menu 
      .then(this.showMenu = false)
      .catch(err => { console.log(err) });
      
    }
  }
};
</script>

<style  lang = scss scoped>
.top-burger {
  .overL {
    z-index:1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    background-color: rgba(66, 26, 14, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    .router{
        color:white;
        cursor: pointer;

    }

  .line {
    width: 100px;
    border-bottom: 2px solid white;
    margin:0 auto;
  }
  }

.hamburger {
  z-index: 9999;
  display: flex;
  background: white;
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
  img {
    width: 100%;
  }
}
}
</style>