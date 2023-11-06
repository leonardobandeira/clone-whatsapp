<template>
    <div class="chat-area">
      <div class="image full-width full-height">
        <Message v-for="item in 10" :key="item" :text="'sadsadasdsad'" :hour="'15h30'" :my="true"/>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Message from 'src/components/Message/Index.vue'

export default defineComponent({
  name: 'ChatArea',
  components: {
    Message
  }
})
</script>

<style lang="scss" scoped>
.chat-area {
  height: calc(100vh - 59px - 62px);
  min-width: 800px;
  width: calc(100vw - 410px);
  background-color: $grey-background;
}
.image {
  background-image: url('../../assets/bg.png');
  display: flex;
  flex-direction: column-reverse;
}
</style>
