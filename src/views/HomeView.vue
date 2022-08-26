<template>
   <div id="app">
    <div class="row p-3 mt-4" v-if="token !== 'null' && token != null">
      <div class="col-3">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="text-start fw-bold">News</h5>
            <span v-for="item in news" :key="item.id">
            <img :src="item.image" class="img-thumbnail" v-if="item.image">
            <p class="text-start fw-normal fs-6" >{{item.newsTitle}}</p>
            <p class="text-start fw-bold"> <i>posted on:</i> {{item.date}}</p>
            <button type="button" class="btn btn-outline-info" style="float:left">Read More</button>
            <br>
            <br>
            </span>

          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="text-start fw-bold" style="margin-bottom: 5vh;">Post Blog</h5>
            <input v-model="blogText" type="text" class="form-control" placeholder="Enter Text" aria-label="input box">
            <button class="btn btn-success" style="float:left; margin-top:2vh" @click="postBlog()" :disabled="!blogText">POST</button>
          </div>
        </div>
        <div class="card mt-5" v-for="p in postAll" :key="p.id">
          <div class="card-body">
            <h5 class="text-start fw-bold">{{ username }}</h5>
            <p class="text-start fw-normal fs-6">{{p.post}}</p>
            <div class="btn-group" style="float:left;" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary">Like</button>
              <button type="button" class="btn btn-outline-primary" @click="commentshow(p.id)">Comment</button>
              <button type="button" class="btn btn-outline-primary" @click="commentpostshow(p.id)">Comment Post</button>
            </div>
            <br>
            <br>
            <div class="card mt-1 p-2" v-if="revealCommentPost">
              <div class="card-body">
                <input v-model="comment" type="text" class="form-control" placeholder="Enter Comment" aria-label="input box">
                <button class="btn btn-success" style="float:left; margin-top:2vh" @click="commentpost(p.id)" :disabled="!comment">COMMENT</button>
              </div>
            </div>

            <div v-if="revealComment">
              <div class="card mt-1 p-2" v-for="c in comments" :key="c.id" style="border:none;">  
                <div class="card-body" v-if="p.id === c.postId">
                  <div class="card-title" 
                    style="font-size:11px; 
                          float:left; 
                          font-weight:bold;
                          color:#fff;
                          background-color:green;
                          border-radius: 5px;
                          width:10vw;
                          height:2vw;
                          padding:0.5vw;
                          "
                  > 
                     {{ c.fullName }}
                  
                  
                  </div>
                  <div class="card-text text-start"
                    style=" background-color:#e3e4e6;
                            border-radius: 5px;
                            color:#000;
                            margin-top:6%;
                            padding:3%;

                    "
                  > 
                    {{ c.comment }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="text-start fw-bold">Friends</h5>
            <ul class="list-group list-group-flush" v-for="list in friendsList" :key="list.id">
              <li class="list-group-item text-start fs-6">{{list.userName}}</li>
            </ul>
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
   </div>
</template>
<script>
import axios from 'axios'
import { URL_OF_API } from "../api/url.js"

export default {
name: "Home",
 async created() {
    this.token = localStorage.getItem("bearer_token")
    this.username = localStorage.getItem("username")
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`
    console.log(this.token);
    document.body.style.backgroundColor = "rgb(129, 255, 192)";

   await this.getPostList()
  },
  data() {
    return {
        blogText:null,
        postAll:[],
        userId: 6,
        token:null,
        username:'',
        postId: null,
        comments:[],
        comment:null,
        revealComment:false,
        revealCommentPost: false,
        friendsList: [
            {
            'userName' : 'Siam' 
            },
            {
            'userName' : 'Saadman' 
            },
            {
            'userName' : 'Oni' 
            },        {
            'userName' : 'Tasfia' 
            },        {
            'userName' : 'Adomji' 
            },        {
            'userName' : 'Aladin' 
            },        {
            'userName' : 'Shanto' 
            },        {
            'userName' : 'Abdal' 
            },
        ],
      news: [
        {
          'newsTitle':'These Robo-Fish Could Help Save the Oceans from Microplastic Scientists have created tiny robots that can ‘swim’ around oceans and seas while absorbing microplastics',
          'date': '12:00:00 PM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1656497661190-EZ5AE3JEAE23ZYINRYQ2/robofish.jpg?format=500w',
        },
                {
          'newsTitle':'Researchers at Antarctica’s Atka Bay are studying a colony of around 20,000 emperor penguins with the help of a small, yellow robot called ECHO.',
          'date': '1:00:00 PM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1656013890942-KSTXJX54FVQDR8Z22K0B/three-emperor-penguins-meet-echo.jpg?format=500w',
        },
                {
          'newsTitle':'The vital importance of coral can’t be underestimated, with nearly a quarter of all marine life depending on healthy coral reefs for shelter and food. Now, scientists have discovered that dolphins may be using them to treat skin infections, adding to evidence that some corals and sponges may also have medicinal properties.',
          'date': '7:00:00 AM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1655991780719-3B6D576R6WE90XARHYXR/Angela+Ziltener+.jpg?format=500w',
        },
                {
          'newsTitle':'As tiger stripes are as unique as human fingerprints, this groundbreaking database storing stripe profiles could aid the authorities working to dismantle the illegal wildlife trade.',
          'date': '2:00:00 PM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1655233366384-BNN2H4U196BTFWW21L62/max-van-den-oetelaar-2pSK9oOgCmQ-unsplash.jpg?format=500w',
        },
                {
          'newsTitle':'Activists have long opposed foie gras for its cruel method of relentlessly force-feeding geese to fatten up their livers. Now, food entrepreneurs are searching for solutions to save birds from this horrific trade - and one of the leading answers could lie in fungi.',
          'date': '12:00:00 PM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1653584103333-9GSUG2P4E7GI3JCTCUZ4/foie-gras-pate-g87e132828_1280.jpg?format=500w',
        },
                {
          'newsTitle':'With just 336 known North Atlantic right whales remaining, scientists are turning to technology to keep this declining species safe from one of its biggest threats.',
          'date': '3:00:00 AM',
          'image':'https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1655143637479-2U0F114UKE4616EVBCA9/_124970459_buoy.png?format=500w',
        },
      ],
    }
  },

  methods : {
    async commentpostshow(postId){
      if (this.revealCommentPost == true) {
          this.revealCommentPost = false
          this.postId = null
        } else {
          this.revealCommentPost = true
          this.postId = postId
        }
    },
    async commentshow (postId) {
        if (this.revealComment == true) {
          this.revealComment = false
        } else {
          this.revealComment = true
        }
      try {
        const url = URL_OF_API
        await axios.get(url + postId +'/comment/list',
          {
            headers: {'Content-type': 'application/json'}
          }
        ).then(response => {
          this.comments = response.data.data
        })

        console.log('this is the comments = ', this.comments)
       

      } catch (err) {
        console.log(err)
      }
    },
    async commentpost (postId) {
      try {
        if (this.comment) {
        const url = URL_OF_API
        await axios.post(url + postId +'/comment/add',
          {
            comment: this.comment
          }
        ).then(response => {
           console.log(response)
        })

       await this.commentshow(postId)
        }



      } catch (err) {
        console.log(err)
      }
    },
    async getPostList () {
      try {
        const url = URL_OF_API
        await axios.get(url + 'post/list',
          {
            headers: {'Content-type': 'application/json'}
          }
        ).then(response => {
          this.postAll = response.data.data
        })

        console.log('this is the posts by user 6 = ', this.postAll)
      } catch (err) {
        console.log(err)
      }
    },

    async postBlog () {
      try {
        const url = URL_OF_API
        await axios.post(url + 'post/create',
          {
            post: this.blogText
          }
        ).then(response => {
          console.log(response)
        })

        await this.getPostList()

      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>
<style scoped>
</style>
