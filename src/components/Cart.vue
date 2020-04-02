<template>
  <section class="overBground">
    <div class="cartWrapper">
      <img src="../assets/graphics/bag.svg" alt="Bag/Cart" @click="showCart = !showCart" />
      <div class="lengthWrapper">
        <span>{{cart.length}}</span>
      </div>
    </div>
    <div v-if="showCart" class="overlay">
      <div class="cartItems">
        <h1 class="cart">Din beställning</h1>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          v-bind:item="item"
          :countItem="count(item)"
        />
          <h2 class="total">Total</h2>
          <h2>{{totalPrice}} kr</h2>
         <span>inkl moms + drönarleverans</span>
         <button class="pay">Take my money!</button>
      </div>
     
    </div>
  </section>
</template>

<script>
import CartItem from "../components/CartItem";
import { mapGetters } from "vuex";
export default {
  components: {
    CartItem
  },
  // om det har data bara för den componenten är det bättre att lägger i componnenten
  data: () => ({
    showCart: false
  }),
  computed: {
    cart() {
      return this.$store.state.cart;
    },
     ...mapGetters(["totalPrice"]),

    cartItems() {
      return this.$store.state.menu.filter(
        item => this.$store.state.cart.indexOf(item) !== -1
      );
    }
  },
  methods: {
    count(item) {
      return this.cart.filter(item2 => item2.id == item.id).length;
    },
   
  }
};
</script>

<style lang = scss scoped >

.overBground {
  .overlay {
      display:flex;
      justify-content: center;
  background-color: rgba(66, 26, 14, 0.7);
  width: 100%;
  height: 1155px;
  position: absolute;
}
  
  .cartWrapper {
    z-index: 999;
    display: flex;
    background: rgb(22, 22, 22);
    border-radius: 100%;
    margin: 1rem;
    height: 2rem;
    width: 2rem;
    padding: 1rem;
    margin-bottom: 5rem;
    position: absolute;
    top: 1rem;
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
  .cartItems {
    position: relative;
    /*left:20px;*/
    top: 100px;
    background-color: white;
    height: 89%;
    color: black;
    width: 90%;
    h1{
        font-weight: bold;
        font-size: 2rem;
    }
    .pay {
  width: 300px;
  background-color: rgb(14, 3, 3);
  color: white;
  border-radius: 30px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  margin: 30px 0 0 20px;
  outline: none;
}
  }
}
</style>