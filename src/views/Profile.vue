<template>
  <div class="profile">
    
     <header>
      <img src="../assets/graphics/graphics-header.svg" class="image" />
     <Hamburger/>
    </header>  
     <Login v-if= "hasNoLogin"/> 
    <article v-else>
        <img class="user" src="../assets/graphics/user.svg" alt="user">
        <h2>{{user.fullName}}</h2> 
        <h5>{{user.userEmail}}</h5>
        <ul>
            <h2>Order History</h2>
            <li v-for= 'order in orders' :key="order.orderNumber" class="order">
                <div>
                <h4>{{order.orderNumber}}</h4>
                <span>total ordersumma</span>
                </div>
                <div>
                <h4>{{writeDate(order.timeStamp)}}</h4>
                <span class="value"> {{order.totalValue}} kr</span>
                </div>
            </li>
        </ul>
        <div class="total">
            <h1>Totalt spenderat</h1><h1>{{historyTotal}} kr</h1>
        </div>
    </article>
  </div>
</template>

<script>
import Login from "../components/Login"
import Hamburger from "../components/Hamburger"
export default {
 components:{
     Login,
     Hamburger

 },
 computed:{
    hasNoLogin(){
        if (!this.$store.state.user.fullName) {
            return true
        }
       return this.$store.state.user.fullName == ""
    },
    user() {
        return this.$store.getters.getUser
    },
    orders(){
        return this.$store.state.orders
    },
    historyTotal(){
        return this.$store.getters.orderHistorySpent
        
    }
 },
 async created(){
     await this.$store.getters.getUser
     await this.$store.dispatch('fetchUuid')
     this.$store.dispatch('fetchOrders')
 },
 methods: {
    writeDate(d) {
    return new Date(d).toLocaleDateString().split("-").join("/");
    }
},

}
</script>

<style lang =scss scoped>
.profile{
    background: #331a00;
    min-height: 100vh;
    width: 500px;
    position: relative;
    .image{
        width:500px;


    }
  article{
    display: flex;
    align-items: center;
    flex-direction: column;
    h2{
      margin: 0;
      color: #ffffff;
     }
     h5{
         color: rgba(207, 204, 204, 0.815);
         margin:5px;
     }
    }
 .user{
    width: 8rem;
    height: 8rem;
    background:pink;
    border-radius: 999rem;
    padding: 1rem;
    position:static;
    
    }
     .total {
    display: flex;
    width: 90%;
    justify-content: space-between;
    border-top: 1px solid white;
    h1{
        color:white;
    }
}
ul{
    width: 90%;
    list-style: none;
    padding: 0;
    margin: 0;
   display: flex;
   flex-direction: column;
    h2{
        align-self: flex-start;
    }
    .order{
        display: flex;
        justify-content:space-between;
        border-bottom:1px solid rgb(168, 168, 168);
    span{
        color:rgb(168, 168, 168);
        font-size:0.7rem;
    }
    .value{
        display: flex;
        justify-content: flex-end;
    }
    h4{
        color:rgb(214, 214, 214);
        font-size:0.8rem;
        margin:1rem 0 0 0;
    }
    }
 }

}

</style>