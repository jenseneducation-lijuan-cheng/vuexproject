<template>
  <div class="cartListItem ">
      <div>
      <h3>{{item.title}}</h3>
      <h5 class="price">{{item.price}}kr</h5>
    </div>
    <div class="listIcon">
      <img src="@/assets/graphics/arrow-up.svg" alt="Arrow up" @click="addItems(item.id)" />
      <h6 class="count">{{countItem}}</h6>
      <img src="@/assets/graphics/arrow-down.svg" alt="Arrow down" @click="deleteItems(item.id)" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props:{

        item:Object,
        countItem:Number
    },
    // varije filer är scoped behöver importeras varije gång när det används 
    methods: {
      ...mapMutations(["addItems" ,"deleteItems"])
    
  }

}
</script>

<style lang= scss scoped>
.cartListItem {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left:10px;
}
.listIcon {
  margin: 10px 20px 10px 0;
}
.count {
  margin: 0;
  text-align: center;
}
.price {
  margin: 0;
}
</style>