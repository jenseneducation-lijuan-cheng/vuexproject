<template>
  <div id="login">
    <div id="header">
      <img class="logo" src="@/assets/graphics/airbean-landing.svg" alt="logo" />
      <h1>Välkommen till AirBean Familjen!</h1>
      <h4>Genom att skapa ett konto nedan kan <br>du spara och se din orderhistorik</h4>
    </div>
    <div id="users">
      
      <label for="name">Name:</label>
      <input name="name" type="text" v-model="fullName" />
      
      
      <label for="email">E-mail:</label>
      <input name="email" type="text" v-model="userEmail" />
      
      <label class="switch">
      <input name="checkbox" type="checkbox" @change="update_checkbox" v-model="CB"/>
       <span class="slider"></span>
       <span class="ok">GDPR Ok!</span>
      </label>
      <button  class= "saveUser" v-bind:disabled="!CB" @click="saveUser()">
        Brew me a cup!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    userEmail: "",
    CB:false
  }),
  methods:{
    update_checkbox() {},
    
    saveUser(){
      this.$store.commit("saveUser",{fullName:this.fullName,userEmail:this.userEmail})
    }
  }
  
};
</script>

<style lang = scss scoped>
#login {
  display: flex;
  flex-direction: column;

  background-color: pink;
  width: 90%;
  height: 88%;
  position: absolute;
  top:12%;
  left: 5%;
}
#header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .logo {
    margin-bottom: 2rem;
    height: 100px;
  }
  h1 {
    text-align: center;
    color: #331a00;
  }
}
  #users{
    display: flex;
    flex-direction: column;

    label {
    margin-left:60px;
    align-self:flex-start;
    
  }
  .ok{
    position: relative;
    top:-30px;
    left:70px;
  }
  input {
    align-self:center;
    border: 1px  solid black;
    padding: 0.5rem;
    width: 70%;
    border-radius: 5%;
    background:none;
    margin:1rem;
    font-size: 1.5rem;
  }

//animation slider
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #339966;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(143, 156, 167);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider {
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}
.saveUser{
  
  font-family:" PT Serif";
  padding: 5px;
  outline: none;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  width:50%;
  background: #2F2926;
  border-radius:50px;
  margin: 50px auto;
  text-align: center;
  cursor: pointer;
}
.saveUser:disabled {
  background-color:rgb(194, 192, 192);
}
  }
</style>