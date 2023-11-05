<template>
  <q-page class="container full-height">
    <div>
      <ConversationArea/>
    </div>

    <div class="column" v-if="true">
      <TopBar :title="'Leonardo Bandeira'"/>
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Empty from 'src/components/Empty/Index.vue'
import ConversationArea from 'src/components/ConversationArea/Index.vue'
import TopBar from 'src/components/TopBar/Index.vue'

export default defineComponent({
  name: 'RestrictArea',
  components: {
    Empty,
    ConversationArea, 
    TopBar
  },
  setup () {
    return {
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