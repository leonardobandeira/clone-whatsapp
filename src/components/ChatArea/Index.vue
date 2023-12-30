<template>
    <div class="chat-area">
      <div class="image full-width full-height">
        <Message 
          v-for="item in messages" 
          :key="item.id" 
          :text="item.text" 
          :hour="item.hour" 
          :my="my(item.userId)"
        />
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Message from 'src/components/Message/Index.vue'
import api from 'src/services/api'
import { notify } from 'src/utils'

export default defineComponent({
  name: 'ChatArea',
  props: ['currentUser', 'newMessage'],
  components: {
    Message
  },
  data(){
    return {
      messages: [],
      myId: localStorage.getItem('myId')
    }
  },
  async created(){
    await this.getMessages()
  },
  async updated(){
    await this.getMessages()
  },
  watch:{
    currentUser(){},
    newMessage(){}
  },
  methods:{
    async getMessages(){
      await api
      .get(`messages/${this.currentUser}/${this.myId}`)
      .then(response => {
          this.messages = response.data
      })
      .catch(error => {
          // notify('negative', 'Falha ao listar mensagens!')
      })
    },
    my(messageUserId){
      return this.myId === messageUserId.toString()
    }
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
