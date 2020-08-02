<template>
  <div class="orderPage">
  
    <h4>Ordernummer # {{orderInfo.order.data.orderNumber}}</h4>
    <img src="../assets/graphics/drone.svg" alt="Airbean Drone" />  
  <h1>Din beställning är på väg</h1>
  <h3>{{orderInfo.eta}} minuter</h3>
   <button class="cool" @click="$router.push('/Menu')">OK, cool</button>
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
    align-self:center;
    outline: none;
  }
 }

</style>