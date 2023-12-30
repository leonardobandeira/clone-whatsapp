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

      <q-btn @click="signIn()" :ripple="false" color="secondary" label="Acessar chat" no-caps/>
    </div>

    <q-separator vertical></q-separator>

    <div class="container q-pa-xl">
      <h5>Cadastre-se</h5>
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

      <q-btn 
        @click="signUp()" 
        :ripple="false" 
        color="secondary" 
        label="Cadastrar" 
        no-caps
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { notify } from "app/src/utils"
import api from "src/services/api"
import crypto from 'crypto-js'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      email: "",
      name: "",
      emailSignUp: "",
    }
  },
  watch:{
    email(){
      if(this.email !== ''){
        this.name = ''
        this.emailSignUp = ''
      }
    },
    name(){
      if(this.name !== '') { this.email = '' }
    },
    emailSignUp(){
      if(this.emailSignUp !== '') { this.email = '' }
    }
  },
  methods: {
    async signIn() {
      if (!this.validarEmail(this.email)) {
        this.fail('Informe um e-mail válido!');
        return;
      }

      await api.get(`/user/${this.email}`).then((response) => {
        this.success('Login efetuado com sucesso!', response.data.id)
      }).catch((error) => {
        notify('negative', error.response.data.message)
      })
    },
    async signUp() {
      if (this.emailSignUp === '' || this.name === '') {
        this.fail('Preencha os campos de E-mail e Nome!');
        return;
      }

      await api.post(`/user`, {name: this.name, email: this.emailSignUp}).then((response) => {
        this.success('Cadastro efetuado com sucesso!', response.data.id)
      }).catch((error) => {
        notify('negative', error.response.data.message)
      })
    },
    success(message, id) {
      this.$router.push({ path: '/chat' })
      notify('positive', message)

      const receiver = crypto.MD5(`${id}`).toString();
      localStorage.setItem('receiver', receiver)
      localStorage.setItem('myId', id)
    },
    fail(message) {
      notify('negative', message)
    },
    validarEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
