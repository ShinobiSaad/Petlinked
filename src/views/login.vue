<template>
<section class="vh-100">
  <div class="container h-100 mt-3">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <fa icon="user-astronaut" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;" />
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" v-model="email"/>
                      <label class="form-label" for="form3Example1c">Username</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <fa icon="lock" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" v-model="password"/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" @click="Login()">Login</button>
                  </div>

                </form>

                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <h6>If you don't have an account, 
                        <router-link :to= "{name:'register'}" style="text-decoration:none;">
                            register
                        </router-link>
                    instead
                    </h6>
                </div>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="../assets/Hotpot.png" width="400" style="margin-left:5vw;"
                  class="img-fluid" alt="Petlinked">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'

export default {
    setup() {
      const email = ref("")
      const password = ref("")

      const Login = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(data => console.log(data))
          .catch(err => alert(err.message))
      }

      return {
        Login,
        email,
        password
      }

    },

    created(){
        document.body.style.backgroundColor = "rgb(129, 255, 192)";
    },
    data() {
      return {
          // email: null,
          // password: null,
          // cache: null,
          // error: null,
          // success: false,

          // user: {
          //   email:null,
          //   password:null
          // }
      }

  },
  methods: {
    // async login(){
    //   this.$store.dispatch('loginUser', this.user)
    // },
  },

}
</script>