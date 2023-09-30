<template>
  <q-page class="container full-height">
    <div>

    </div>

    <div class="column" v-if="false">
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Empty from 'src/components/Empty/Index.vue'

export default defineComponent({
  name: 'RestrictArea',
  components: {Empty},
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