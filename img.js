var firebaseConfig = {
    apiKey: "AIzaSyCT34qm8u2tmWujp3Wg_R9yzPpIXtDxxWI",
    authDomain: "trial1-mobhass-2022.firebaseapp.com",
    databaseURL: "https://trial1-mobhass-2022-default-rtdb.firebaseio.com",
    projectId: "trial1-mobhass-2022",
    storageBucket: "trial1-mobhass-2022.appspot.com",
    messagingSenderId: "995656921203",
    appId: "1:995656921203:web:33e80dcd41d711e84dba06",
    measurementId: "G-0R4LXYP74T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.storage();
  
    
  var img_index = 1;
  var storageRef = firebase.storage().ref();
  var listRef = storageRef.child('unknown');
  listRef.listAll().then(function(result){
      console.log(result);
      result.items.forEach(function(imgRef){
        imgRef.getDownloadURL().then(function(url){
         
    imgRef.getMetadata()
  .then((metadata) => {
    console.log(metadata);
    date = new Date(metadata.timeCreated);
    console.log(date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate());
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    var time = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    var writtenDate = (date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate());
    
    
    
    if (img_index == 11){
            
    }
    else{
      var img = $('<img />').attr({
        'id': 'poster'+ img_index,
        'src': url,
        'alt': 'image',
        'title': time + " at " + writtenDate,
        'width': 250
    }).appendTo('#img-area');
    var paragraph = document.getElementById("img-area");
    var text = document.createTextNode(time + " at " + writtenDate);

    paragraph.appendChild(text);


    

      img_index++;
    }

  })
  .catch((error)=> {
    console.error(error);
  });
            
        });
    })
  }).catch(function(error){
      console.log(error);
  });
  