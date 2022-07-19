firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{ 
        document.getElementById("user").innerHTML = " Hi! " + user.email 

        firebase.database().ref('clients/' + user.uid).update({
            last_login: new Date().toString()//or your picker date
            });

            firebase.storage().ref('clients/' + user.uid + "/profile.jpg").getDownloadURL()
            .then(imgURL => {
                img.src = imgURL;
                img.style.transitionDelay ="1s";
            })

    }
})


function logout(){
    if (confirm("Are you sure you want to Logout?" ))  {
   
    
        firebase.auth().signOut()
        } else {
        return false;
        }
    
}
