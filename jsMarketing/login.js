document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
  })
  
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("user-page.html")
    }
  })
  
  
  
  
  
  
  
  function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
	  .then(() => {
        alert("Login Successfully!")
    })
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
  }
  
  
  
  
  function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your Registered Email Address!")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
  }
  
  function emailVer(){
  const email = document.getElementById("email").value
  firebase.auth().sendEmailVerification(email)
    .then(() => {
      alert("Email Verification Sent")
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
  }
  
  
  
  
  
  
  
  
  
  