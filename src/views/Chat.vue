<template>
   <div id="app">
    <div class="row p-3 mt-4" v-if="token !== 'null' && token != null">
      <div class="col-2">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="text-start fw-bold">Friends</h5>
            <hr>
            <div class="list-group-item list-group-item-action border-0" v-for="item in friendsList" :key="item.id" style="cursor:pointer;" @click="selectUser(item.id)">
                <div class="d-flex align-items-start" v-if="item.id != currentUser">
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40">
                    <div class="flex-grow-1 ml-3">
                        {{item.userName}}
                    </div>
                    <br>
                    <br>
                </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="card mt-5" v-if="selectedFriendId">
          <div class="card-body">
            <h5 class="text-start fw-bold">{{friendInfo.firstName + ' ' +friendInfo.lastName}}</h5>
            <hr>
            <span v-for="msg in userMessage" :key="msg.id">

            <!-- Filter will be FriendId -->
            <div class="d-flex flex-row justify-content-start" v-if="msg.senderId == selectedFriendId">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>
                  <p 
                    class="small p-2 ms-3 mb-1 rounded-3"
                    style="background-color: #f5f6f7;"
                    > 
                      {{ msg.message }}
                    </p>
                <!-- <p class="small ms-3 mb-3 rounded-3 text-muted">{{ msg.createdAt }}</p> -->
              </div>
            </div>
            
            <!-- Filter will be userId -->
            <div class="d-flex flex-row justify-content-end mb-4 pt-1" v-if="msg.senderId == currentUser">
              <div>
                  <p 
                    class="small p-2 ms-3 mb-1 rounded-3" 
                    style="background-color: #266ebf;
                    color:#fff;
                    "            
                    > 
                     {{ msg.message }}
                    </p>
                <!-- <p class="small ms-3 mb-3 rounded-3 text-muted">{{ msg.createdAt }}</p> -->
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>
            </span>

            <div class="d-flex flex-row justify-content-end mb-4 pt-1" v-if="chatenabled">
              <div >
                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" v-for="item in chatMessage" :key="item.id">
                    {{item.chatBody}}
                </p>
                <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>

          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
              alt="avatar 3" style="width: 40px; height: 100%;">
            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
              placeholder="Type message" v-model="chatBody">
            <button class="btn btn-success" @click="sendingChat()">Send</button>
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
   </div>
</template>
<script>
import axios from 'axios'
import { URL_OF_API } from "../api/url.js"

export default {
  name: "Home",
  async created() {
    this.token = localStorage.getItem("bearer_token")
    this.currentUser = localStorage.getItem("currentUser")
    this.username = localStorage.getItem("username")
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('bearer_token')}`
    console.log(this.token);
    document.body.style.backgroundColor = "#54b2c7";
  },
  data() {
    return {
      token:null,
        chatenabled:false,
        chatBody:null,
        selectedFriendId: null,
        userMessage:[],
        recieverMessage:[],
        friendInfo:[],
        friendsList: [
            {
              'id': 1,
            'userName' : 'Adomji' 
            },
            {
              'id': 12,
            'userName' : 'Oni' 
            },
            {
              'id': 6,
            'userName' : 'Jessica' 
            },       
            {
              'id': 4,
            'userName' : 'Tasfia' 
            },       
             {
              'id': 5,
            'userName' : 'Adomji' 
            },        
            {
              'id': 6,
            'userName' : 'Aladin' 
            },        
            {
              'id': 7,
            'userName' : 'Shanto' 
            },        
            {
              'id': 8,
            'userName' : 'Abdal' 
            },
        ],

        posts: [
            {
            'userName': 'Saad',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
                    {
            'userName': 'Adomji',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
                    {
            'userName': 'Oni',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
                    {
            'userName': 'Sadman',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
                    {
            'userName': 'Tasnim',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
                    {
            'userName': 'Adbal',
            'postBody': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
    methods: {
    async selectUser(id){
        this.friendInfo = []
        this.selectedFriendId = id
        this.chatMessage = []
        
        await this.getFriendInfo()
        await this.getChatMessage()
        
        

    },
    async getChatMessage () {
      this.chatBody = null
      this.userMessage = []
      try {
        const url = URL_OF_API
        await axios.get(url + 'message/' + this.selectedFriendId,
          {
            headers: {'Content-type': 'application/json'}
          }
        ).then(response => {
          this.userMessage = response.data.data
        })

        console.log('this is the messages from friend = ', this.userMessage)


      } catch (err) {
        console.log(err)
      }
    },

    async sendingChat () {
      try {
        if (this.chatBody) {
        const url = URL_OF_API
        await axios.post(url +'message/send/' + this.selectedFriendId,
          {
            message: this.chatBody
          }
        ).then(response => {
           console.log(response)
        })

       await this.getChatMessage()
        }
        

      } catch (err) {
        console.log(err)
      }
    },

    async getFriendInfo () {
      try {
        const url = URL_OF_API
        await axios.get(url + 'get/' + this.selectedFriendId,
          {
            headers: {'Content-type': 'application/json'}
          }
        ).then(response => {
          this.friendInfo = response.data.data
        })

        console.log('this is the Info of the Friend= ', this.friendInfo)


      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>
<style scoped>
</style>
