import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart:[],
    totalPrice:0,
    orderInfo:{},
    uuid:'',
    user:{},
    orders:[],
    orderHistorySpent: 0

  },
  mutations: {
    setMenu:(state,menu) => (state.menu = menu),
    addItems:(state,id) => state.cart.push(state.menu.find(item => item.id==id)),
    deleteItems(state,id){
      const item =state.cart.find(item2=>item2.id==id)
      const index = state.cart.indexOf(item)
      state.cart.splice(index,1)

    },
    setOrder:(state,data)=>(state.orderInfo =data),
    //tomt cart after man beställt
    emptyCart(state){
      state.cart = []

    },
    setUuid:(state,uuid)=>(state.uuid=uuid),
    saveUser(state, user){
      localStorage.setItem("user",JSON.stringify({fullName:user.fullName,userEmail:user.userEmail}))
      state.user = user;
    },
    setOrders:(state,data) =>(state.orders=data)

  },
  actions: {
    async fetchMenuItems({commit}){
      const response = await axios.get('http://localhost:5000/api/beans')
      commit('setMenu',response.data.menu)
    },
      async postOrder({commit, state}){
        const body = {
          userID: state.uuid,
          items: state.cart,
          totalValue: state.totalPrice
        }
        const response = await axios.post('http://localhost:5000/api/beans', body)
        commit('setOrder',response.data)
        commit('emptyCart')
      },
      async fetchUuid({commit}){
        if (localStorage.getItem("uuid")){
          commit('setUuid',localStorage.uuid)
        }else{
        const response = await axios.get('http://localhost:5000/api/beans/key')
        commit('setUuid',response.data.key)
        localStorage.setItem("uuid",response.data.key)
        }
      },
      async fetchOrders({commit, state}){
        const res = await axios.get(`http://localhost:5000/api/beans/getOrders/${state.uuid}`)
        commit('setOrders',res.data.data)

      }
      
  },
  getters:{
    totalPrice(state){
       state.totalPrice=0
      state.cart.forEach(item=>{
        state.totalPrice= state.totalPrice+item.price

      })

      return state.totalPrice

    },
    orderHistorySpent(state) {
      state.orderHistorySpent = 0
      state.orders.forEach(item => state.orderHistorySpent += item.totalValue)
      return state.orderHistorySpent
    },
    getUser(state) {
      // hitta user i localstorage
      // json.parse kan går fel om user är inte json
      try {
        const user = JSON.parse(localStorage.user)
        if (user.fullName&&user.userEmail) {
          state.user = user
        }
      } catch (error) {
        console.log("no user")
      }
      
      return state.user
    }

  },
})
