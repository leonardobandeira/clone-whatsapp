<template>
  <div class="message-bar row items-center">
    <div class="q-mx-md">
      <q-btn round dense unelevated icon="lar la-grin-alt" text-color="grey" size="15px"></q-btn>
      <q-btn round dense unelevated icon="las la-paperclip" text-color="grey" size="15px"></q-btn>
    </div>
    <q-input rounded outline v-model="text" label="Digite uma mensagem" bg-color="white" class="input-message"></q-input>
    <q-btn round dense unelevated :icon="text !== '' ? 'send' : 'fas fa-microphone'" text-color="grey" size="13px" class="q-ml-sm"></q-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageBar',
  data() {
    return {
      text: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.message-bar {
  height: 62px;
  background-color: $grey-whats;

  .input-message {
    width: 75%;
  }
}
</style>
