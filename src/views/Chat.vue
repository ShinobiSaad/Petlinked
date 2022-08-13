<template>
   <div id="app">
    <div class="row p-3 mt-4">
      <div class="col-2">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="text-start fw-bold">Friends</h5>
            <hr>
            <div class="list-group-item list-group-item-action border-0" v-for="item in friendsList" :key="item.id" style="cursor:pointer;" @click="selectUser(item.userName)">
                <div class="d-flex align-items-start">
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
        <div class="card mt-5" v-if="selectedFriend">
          <div class="card-body">
            <h5 class="text-start fw-bold">{{selectedFriend}}</h5>
            <hr>

            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Hi</p>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Kikhobor ...???
                </p>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">koy Kg goru khela?</p>
                <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hello.</p>
                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Behsi khete pari nai</p>
                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Amar jor hoise!</p>
                <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
            </div>

            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Ayhay bolo ki?</p>
                <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
              </div>
            </div>

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
            <button class="btn btn-success" @click="sendMessage()">Send</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Show when user is not found

      <span v-if="token === 'null' || token == null" >
        <h1 class="display-3" style="margin-top:20vh">You must be signed in to display the posts!</h1>
        <br>
        <br>
        <router-link :to="'/login'"> 
          <button type="button" class="btn btn-success btn-lg fw-bold">Sign in</button>
        </router-link>
      </span> -->
   </div>
</template>
<script>
import { assertDeclareClass } from '@babel/types';

export default {
  name: "Home",
  async created() {
    this.token = localStorage.getItem("bearer_token")
    document.body.style.backgroundColor = "#54b2c7";
  },
  data() {
    return {
      token:null,
        chatenabled:false,
        chatMessage:[
            {
                chatBody:'',
            }
        ],
        chatBody:'',
        selectedFriend: null,
        friendsList: [
            {
            'userName' : 'Siam' 
            },
            {
            'userName' : 'Saad' 
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
    async selectUser(username){
        this.selectedFriend = username
        this.chatMessage = []

    },
    async sendMessage(){
        this.chatMessage.push(
            {
                'chatBody': this.chatBody,
            }
        )

        this.chatenabled = true
    },
  },
};
</script>
<style scoped>
</style>
