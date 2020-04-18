<template>
  <div class="login">
    <div class="header">
      <img class="logo" src="@/assets/graphics/airbean-landing.svg" alt="logo" />
      <h1>Välkommen till AirBean Familjen!</h1>
      <h4>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</h4>
    </div>
    <div>
      <label for="name">Name:</label>
      <input name="name" type="text" v-model="fullName" />
      <label for="email">E-mail:</label>
      <input name="email" type="text" v-model="userEmail" />
      <input name="checkbox" type="checkbox" @change="update_checkbox" />
      <p class="ok">GDPR OK!</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    userEmail: ""
  })
};
</script>

<style lang = scss scoped>
.login {
  display: flex;
  flex-direction: column;

  background-color: pink;
  width: 90%;
  height: 80%;
  position: absolute;
  left: 5%;
}
.header {
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
</style>