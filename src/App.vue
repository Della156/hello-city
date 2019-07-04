<template>
  <ice-router-view ref="view" transition keep-alive />
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState(['token']),
  },

  watch: {
    token(val) {
      if (!val) {
        this.$refs.view.clearCachedViews()
      }
    },
  },
}
</script>
