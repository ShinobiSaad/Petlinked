<template>
   <div id="app">
    <div class="row p-3 mt-4">
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
        <div class="card mt-5" v-for="p in posts" :key="p.id">
          <div class="card-body">
            <h5 class="text-start fw-bold">{{p.userName}}</h5>
            <p class="text-start fw-normal fs-6">{{p.postBody}}</p>
            <div class="btn-group" style="float:left;" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-primary">Like</button>
              <button type="button" class="btn btn-outline-primary">Comment</button>
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
export default {
  name: "Home",
  created() {
    this.token = localStorage.getItem("bearer_token")
    document.body.style.backgroundColor = "rgb(129, 255, 192)";
  },
  data() {
    return {
        token:null,
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

      posts: [
        {
          'userName': 'Siam',
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
          'userName': 'Tasfia',
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
};
</script>
<style scoped>
</style>
