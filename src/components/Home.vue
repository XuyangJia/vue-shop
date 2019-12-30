<template>
  <div>home</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
