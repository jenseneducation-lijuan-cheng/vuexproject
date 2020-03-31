<template>
 <section class="menuItem">
     <aside class="add" @click="addItems(item.id)">
     <img src="./../assets/graphics/add.svg" alt />
     </aside>
  <div>
      <h2>{{item.title}}</h2>
      <p>{{item.desc}}</p>
    </div>
    <div>
      <h2>{{item.price}}Kr</h2>
    </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: {
    item: Object
  },
  methods: {
      ...mapMutations(["addItems"])
    
  }
}
</script>

<style lang=scss scoped>
.menuItem {
  display: grid;
  grid-template-columns: 70px 1fr 90px;
  margin: 20px 0 0 20px;

.add {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
  max-width: 60%;
}
}
}
</style>