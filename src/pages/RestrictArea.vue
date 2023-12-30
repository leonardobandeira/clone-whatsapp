<template>
  <q-page class="container full-height">
    <div>
      <ConversationArea :users="users" @selectedItem="setCurrentItem"/>
    </div>

    <div class="column" v-if="selectedItem">
      <TopBar :title="nameConversation"/>
      <ChatArea :currentUser="selectedItem" :newMessage="newMessage"/>
      <MessageBar />
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import Empty from 'src/components/Empty/Index.vue'
import ConversationArea from 'src/components/ConversationArea/Index.vue'
import TopBar from 'src/components/TopBar/Index.vue'
import ChatArea from 'src/components/ChatArea/Index.vue'
import MessageBar from 'src/components/MessageBar/Index.vue'

import api from 'src/services/api'
import { socket } from 'src/services/socket'
import { notify} from 'src/utils'
export default defineComponent({
  name: 'RestrictArea',
  data(){
    return {
      users: [],
      newMessage: '',
      selectedItem: null,
      nameConversation: ''
    }
  },
  components: {
    Empty,
    ConversationArea,
    TopBar,
    ChatArea,
    MessageBar
  },
  created(){
    const receiver = localStorage.getItem('receiver')
    socket.on(receiver, (message) => {
      const arr = []
      this.users.forEach(element => {
        if(element.id === message.userId){
          element.newMessage = true
        }
        arr.push(element)
      })

      this.newMessage = message.id
      this.users = arr
    })
  }, 
  async mounted(){
    await api.get("users")
    .then(response => {
      this.users = response.data
    })
    .catch(() => {
      notify('negative', 'Falha ao listar usuários!')
    })
  },
  methods:{
    async setCurrentItem({ id, email }){
      this.selectedItem = id

      await api.get(`user/${email}`)
      .then(response => {
        this.nameConversation = response.data.name
      })
      .catch(error => {
        this.nameConversation = 'Novo usuário'
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow: hidden;
  min-width: 1200px;
}
</style>
