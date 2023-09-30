<template>
  <q-page class="row items-center justify-center">
    <div class="container image q-pa-xl">
      <h5>Acesse o chat</h5>
      <q-input
        rounded
        outline
        v-model="email"
        label="Informe o seu E-mail"
        bg-color="white"
        class="q-mb-md">
      </q-input>

      <q-btn :riple="false" color="secondary" label="Acessar chat" no-caps/>
    </div>

    <q-separator vertical></q-separator>

    <div class="container q-pa-xl">
      <h5>Cadastre-se </h5>
      <q-input
        rounded
        outline
        v-model="name"
        label="Informe o seu Nome"
        bg-color="white"
        class="q-mb-md">
      </q-input>
      <q-input
        rounded
        outline
        v-model="emailSignUp"
        label="Informe o seu E-mail"
        bg-color="white"
        class="q-mb-md">
      </q-input>

      <q-btn :riple="false" color="secondary" label="Cadastrar" no-caps/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data (){
    return {
      email: "",
      name: "",
      emailSignUp: "",
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    color: #444444
  }

  width: 48%;
  
  .q-btn,
  .q-input {
    width: 300px;
  }
}

.image {
  background-image: url('../assets/bg.png');
  height: 100vh;
  width: 48%;
}
</style>