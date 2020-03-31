<template>
  <div class="overBground">
    
      <div class="cartWrapper">
      <img src="../assets/graphics/bag.svg" alt="Bag/Cart" @click="showCart = !showCart">
      <div class= "lengthWrapper">
          <span>{{cart.length}}</span>
      </div>
      </div>

      <div v-if="showCart" class="cartItems">
         <h1 class="cart">Din beställning</h1> 
      <CartItem v-for="item in cartItems" :key="item.id" v-bind:item="item" :countItem="count(item)"/>
      </div>
    </div>

</template>

<script>
import CartItem from "../components/CartItem"
export default {
    components:{
        CartItem,
    },
    data: ()=>({
        showCart: false,

    }),
    computed:{
        cart(){
             return this.$store.state.cart
        },
        cartItems() {
            return this.$store.state.menu.filter(item => this.$store.state.cart.indexOf(item) !== -1)
        }
    },
    methods:{
        count(item){
           return this.cart.filter(item2=>(item2.id==item.id)).length
        }

    }

}
</script>

<style lang = scss scoped >
.overBground{
background-color: rgba(66, 26, 14, 0.7);
  width: 100%;
  height: 1155px;
  display: flex;
  justify-content: center;
  position:absolute;
  

.cartWrapper {

  display: flex;
  background: rgb(22, 22, 22);
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  position: absolute;
  top:1rem;
  right: 1rem;
  cursor: pointer;
  img {
    width: 100%;
  }
  .lengthWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 114, 70);
  border-radius: 100%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
}
}
.cartItems{
  position: relative;
  top: 100px;
  background-color: white;
  height: 90%;
  color: black;
  width:90%;
}

}
</style>