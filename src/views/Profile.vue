<template>
<section class="vh-100">
  <div class="container py-5 h-100" v-if="token !== 'null' && token != null">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6 class="fw-bold">Username</h6>
                    <p class="text-muted">{{ userdetails.data.username }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="fw-bold">Email</h6>
                    <p class="text-muted">{{ userdetails.data.emailAddress }}</p>
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6 class="fw-bold">Full Name</h6>
                    <p class="text-muted">{{ username }}</p>
                  </div>
                </div>
                <h6 class="fw-bold">Friends</h6>
                <hr class="mt-0 mb-4">
                <h1> 10 </h1>
                <div class="d-flex justify-content-start ml-5">
                  <a href="#!"><fa :icon="['fab','facebook']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                  <a href="#!"><fa :icon="['fab','instagram']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                  <a href="#!"><fa :icon="['fab','linkedin']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Show when user is not found -->

  <span v-if="token === 'null' || token == null" >
    <h1 class="display-3" style="margin-top:20vh">You must be signed in to display the posts!</h1>
    <br>
    <br>
    <router-link :to="'/login'"> 
      <button type="button" class="btn btn-success btn-lg fw-bold">Sign in</button>
    </router-link>
  </span>
</section>
</template>
<script>
import axios from 'axios'
import { URL_OF_API } from "../api/url.js"

export default {
   async created(){
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`
      await this.getUserProfile()
      this.token = localStorage.getItem("bearer_token")
      this.username = localStorage.getItem("username")
      document.body.style.backgroundColor = "rgb(129, 255, 192)";
    },
    data(){
      return {
        token:null,
        username:'',
        userdetails: [],
      }
    },

    methods : {
      async getUserProfile () {
        try {
          const url = URL_OF_API
          await axios.get(url + 'user/6',
            {
              headers: {'Content-type': 'application/json'}
            }
          ).then(response => {
            this.userdetails = response
          })

          console.log('this userdetails = ', this.userdetails)
        } catch (err) {
          console.log(err)
        }
      },
      },
}
</script>