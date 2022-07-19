firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{ 
        document.getElementById("user").innerHTML = " Hi! " + user.email 

        firebase.database().ref().child("clients").orderByChild("email").equalTo(user.email).once("value", function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                
                var uid = user.uid;

                var fname = childSnapshot.child("fname").val();
                var mname = childSnapshot.child("mname").val();
                var lname = childSnapshot.child("lname").val();
                var address = childSnapshot.child("address").val();
                var contact = childSnapshot.child("contact").val();
                var email = childSnapshot.child("email").val();
                
                document.getElementById("user-uid").innerHTML = uid
                document.getElementById("fname").innerHTML = fname
                document.getElementById("mname").innerHTML = mname
                document.getElementById("lname").innerHTML = lname
                document.getElementById("address").innerHTML = address
                document.getElementById("contact").innerHTML = contact
                document.getElementById("email").innerHTML = email
                
                
                
                
            });
        });

    }
})

function change(){
    document.getElementById('update-form').style.display = "flex";
    document.getElementById("email1").value =  document.getElementById("email").innerText
}

function profile(){

    document.getElementById('update-form1').style.display = "flex";
    document.getElementById('emails').disabled = true;
    document.getElementById("firstname").value =  document.getElementById("fname").innerText
    document.getElementById("middlename").value =  document.getElementById("mname").innerText
    document.getElementById("lastname").value =  document.getElementById("lname").innerText
    document.getElementById("add-ress").value =  document.getElementById("address").innerText
    document.getElementById("contactno").value =  document.getElementById("contact").innerText
    document.getElementById("emails").value =  document.getElementById("email").innerText
    
    
}

function cancel(){
    document.getElementById('update-form').style.display = "none";
    document.getElementById('update-form1').style.display = "none";
}

function updateinfo(){

    uid = document.getElementById("user-uid").innerText
    email = document.getElementById("emails").value
    password = document.getElementById("password").value
    fname = document.getElementById("firstname").value
    mname = document.getElementById("middlename").value
    lname = document.getElementById("lastname").value
    address = document.getElementById("add-ress").value
    contact = document.getElementById("contactno").value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
      
          
          let confirmAction = confirm("Are you sure you want to update?");
      if (confirmAction) {

        
        firebase.database().ref('clients/' + uid).update({
            fname: fname,
            mname: mname,
            lname: lname,
            address: address,
            contact: contact
            })
      
        location.reload();
      
        alert("The Profile has been updated");
        } else {
      alert("Action canceled");
      }
        
        

 })
 .catch(function(error){
   var error_code = error.code
   var error_message = error.message

   alert(error_message, error_code)
 })
}


function updatepassword(){
    email = document.getElementById("email1").value
    oldpassword = document.getElementById("oldpassword").value
    newpassword = document.getElementById("newpassword").value

    firebase.auth().signInWithEmailAndPassword(email, oldpassword)
 .then(function(){
     
    firebase.auth().currentUser.updatePassword(newpassword).then(function(){

       alert('Password has been changed')

       location.reload()

    }).catch(function(error){
        var error_code = error.code
        var error_message = error.message

   alert(error_message, error_code)
    })

 })
 .catch(function(error){
   var error_code = error.code
   var error_message = error.message

   alert(error_message, error_code)
 })
}



function logout(){
    if (confirm("Are you sure you want to Logout?" ))  {
   
    
        firebase.auth().signOut()
        } else {
        return false;
        }
    
}
