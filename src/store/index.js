import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart:[],
    totalPrice:0,
    orderInfo:{}

  },
  mutations: {
    setMenu:(state,menu) => (state.menu = menu),
    addItems:(state,id) => state.cart.push(state.menu.find(item => item.id==id)),
    deleteItems(state,id){
      const item =state.cart.find(item2=>item2.id==id)
      const index = state.cart.indexOf(item)
      state.cart.splice(index,1)

    },
    setOrder:(state,data)=>(state.orderInfo =data)
  },
  actions: {
    async fetchMenuItems({commit}){
      const response = await axios.get('http://localhost:5000/api/beans')
      commit('setMenu',response.data.menu)
    },
      async postOrder({commit}){
        const response = await axios.post('http://localhost:5000/api/beans')
        commit('setOrder',response.data)
      }
  
  },
  getters:{
    totalPrice(state){
       state.totalPrice=0
      state.cart.forEach(item=>{
        state.totalPrice= state.totalPrice+item.price

      })

      return state.totalPrice

    }

  },
})
