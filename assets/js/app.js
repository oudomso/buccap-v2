$( document ).ready(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyAAYOYa6uiZjZr47mRQ0JmhCJML4geiTkk",
    authDomain: "class-project-328c0.firebaseapp.com",
    databaseURL: "https://class-project-328c0.firebaseio.com",
    projectId: "class-project-328c0",
    storageBucket: "class-project-328c0.appspot.com",
    messagingSenderId: "201869728141",
    appId: "1:201869728141:web:ecb3fff10ff3ef2d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  var activities = {
    active :{
     phrase: ["Go play Soccer", "Go Jogging", "Pratice Yoga", "Learn how to ride a Skateboard", "Get up and Dance", "Hit the Gym"],
     things: ["Soccer", "Jogging", "Yoga", "Skateboard", "Dance", "Best Gym workout"],
    },
    food :{
    phrase: ["Eat fancy pizza", "Eat a popular hamburger", "Drink some good beer", "Try noodles", "Good steak"],
    things: ["Pizza", "Hamburger", "Beer", "Noodles", "Steak"],
    },
    art :{
    phrase: ["Play a song on the guitar", "Try painting", "Do Arts and Crafts", "Write poetry", "Do ceramic"],
    things: ["beginner guitar tutorial", "how to paint", "Arts and Craft tutorial", "poetry", "ceramic tutorial"],
    },
    games :{
    phrase: ["Play someone in chess", "Play pictionary", "Play someone in checkers", "Play scrabble", "Play yatze", "Learn Mahjong"],
    things: ["Chess", "Pictionary", "Checkers", "Scrabble", "Yatze", "Mahjong"],
    },
    videos :{
    phrase: ["Watch a Pokemon movie ", "Watch a Disney movie you've never seen before", "Watch a Stephen King Movie", "Watch a Nicholas Sparks Movie"],
    things: ["Pokemon detective pikachu", "Disney Aladin trailer", "Stephen King Movie", "Nicholas Sparks Movies"],
    },
    
   };
   function displayvideo (title, topic, num){

    var queryURL = " https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+title+"&key=AIzaSyAdBSj6L7KqgDhLPsdnku_JZSl6Bcx5Og8";
  
  
    $.ajax({
      url: queryURL,
      method: "GET",
    })
    .then(function(response) { 

      var link = "https://www.youtube.com/v/" + response.items[0].id.videoId;
      // var link= "https://www.youtube.com/v/" + response.items[0].id.videoId;
      return link;
      
    }).then(function(link){
    var li = document.createElement("li");
    var inputValue = topic.phrase[num];
    var t = document.createTextNode(inputValue );
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);      
    //document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Done");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    var linebreak = $("<br>");
    linebreak.addClass("center");

    
    var video = $("<object>");
    video.attr("data", link);
    video.attr("height", "315 px");
    video.attr("width", '420 px');

    video.addClass("center");
    console.log(link);

    li.append(linebreak[0]);

    li.append(video[0]);    
    });
  }
   
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  function randomize(){
    var activenum = Math.floor(Math.random()*activities.active.phrase.length);
    var getactive = activities.active;
        
    
    var foodnum = Math.floor(Math.random()*activities.food.phrase.length);
    var getfood = activities.food;
    
    var artnum = Math.floor(Math.random()*activities.art.phrase.length);
    var getart = activities.art;

    var gamesnum = Math.floor(Math.random()*activities.games.phrase.length);
    var getgames = activities.games;

    var videosnum = Math.floor(Math.random()*activities.videos.phrase.length);
    var getvideos = activities.videos;


    displayvideo(getactive.things[activenum],getactive,activenum);
    displayvideo(getfood.things[foodnum],getfood, foodnum);
    displayvideo(getart.things[artnum], getart, artnum);
    displayvideo(getgames.things[gamesnum], getgames, gamesnum);
    displayvideo(getvideos.things[videosnum], getvideos, videosnum);


  }
  
  randomize();

  
function displaymovie(title){

  console.log('here')
  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(queryURL);
  console.log(response);
  $(".movies-view").text(JSON.stringify(response));
    });
}


});