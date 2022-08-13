<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to= "{name:'home'}" >
      <img src="../assets/Hotpot.png" alt="" width="30" height="30">
      Petlinked
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Friends</a>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to= "{name:'chat'}" >
              Chat
            </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to= "{name:'profile'}" >
            Profile
          </router-link>
        </li>
      </ul>
      <div class="d-flex">
        <!-- <router-link class="navbar-item" :to= "{name:'login'}" > -->
          <!-- <h4 style="margin-right:10px;">{{name}}</h4> -->
          <button type="button" class="btn btn-outline-success" @click="Logout()">Logout</button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import { ref, onBeforeMount } from 'vue'
import firebase from 'firebase/compat/app'
import { useRouter } from 'vue-router'
export default {
    setup() {
      
      const router = useRouter()
      const name = ref("")

      onBeforeMount(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          name.value = user.email.split('@')[0]
        }
      })

      const Logout = () => {
        firebase
          .auth()
          .signOut()
          .then(router.replace('/login'))
          .catch(err => alert(err.message))
      }

      return {
        name,
        Logout
      }

    },
    created(){
        document.body.style.backgroundColor = "rgb(129, 255, 192)";
    },
    methods : {
      // async register(){
      //   alert("you have been registered");
      // }
    },
}
</script>
<style scoped>
.navbar-nav > li{
  margin-left:50px;
}
.navbar{
  background-color: rgba(255, 255, 255, 0.815);
  backdrop-filter: blur(10px);
}
</style>