<template>
  <div>
      <div>
      <h2>{{item.title}}</h2>
      <h6 class="price">{{item.price}}kr</h6>
    </div>
    <div class="listIcon">
      <img src="@/assets/graphics/arrow-up.svg" alt="Arrow up" @click="addItems(item.id)" />
      <h6 class="count">{{countItem}}</h6>
      <img src="@/assets/graphics/arrow-down.svg" alt="Arrow down" @click="deleteItems(item.id)" />
    </div>
  </div>
</template>

<script>
export default {
    props:{

        item:Object,
        countItem:Number
    }

}
</script>

<style>

</style>