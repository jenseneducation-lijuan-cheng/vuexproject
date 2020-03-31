<template>
  <div class="menu">
    <Cart/>
    <header>
      <img src="../assets/graphics/graphics-header.svg" class="image" />
     
    </header>
    <h1>Meny</h1>
    <MenuItem v-for="item in menu" :key="item.id" v-bind:item="item" />
    <footer>
      <img src="../assets/graphics/graphics-footer.svg" class="image" />
    </footer>
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart"
import { mapActions } from "vuex";
export default {
  components: {
    MenuItem,
    Cart
  },

  methods: {
    ...mapActions(["fetchMenuItems"])
  },

  computed:{
      menu(){
          return this.$store.state.menu;
      }
  },

  created() {
    this.fetchMenuItems();
  }
};
</script>

<style  lang= scss scoped>
 .menu{
     width: 500px;
     background-color: pink;
     position: relative;
     .image{
    height: 100%;
    width: 100%;
  }
  h1 {
  text-align: center;
  font-size: 3rem;
}
 }
</style>