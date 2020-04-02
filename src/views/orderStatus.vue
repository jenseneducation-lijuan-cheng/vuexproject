<template>
  <div class="orderPage">
  
    <h4>Ordernummer # {{orderInfo.orderNr}}</h4>
    <img src="../assets/graphics/drone.svg" alt="Airbean Drone" />  
  <h1>Din beställning är på väg</h1>
  <h3>{{orderInfo.eta}} minuter</h3>
   <a href="/menu"><button class="cool">OK, cool</button></a>
  </div>
  
</template>

<script>
export default {
  computed:{
      orderInfo(){
        return this.$store.state.orderInfo
      }
  },
}
</script>

<style lang=scss scoped>
 .orderPage{
     width: 500px;
     height: 100vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     justify-content: space-around;
     background-color: rgb(236, 114, 70);
      h1 {
    color: white;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  h3,
  h4 {
    margin: 40px;
    color: white;
  }
     .cool {
    width: 200px;
    background-color: white;
    color: black;
    border-radius: 30px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    text-align: center;

    outline: none;
  }
 }

</style>