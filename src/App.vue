<template>
<div>
<Nav/>
<router-view/>
</div>

</template>
<script>
// @ is an alias to /src
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase/compat/app'
import Nav from '@/components/Nav.vue'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/')
        }
      })
    })
  },

  components: {
    Nav
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
