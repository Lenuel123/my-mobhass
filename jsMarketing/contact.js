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
	var secondaryApp = firebase.initializeApp(firebaseConfig, "secondaryApp");
	firebase.storage();

document.getElementById("addmessage").addEventListener("click", addmsg);  

function addmsg(){
fullname = document.getElementById('Fullname').value;
email = document.getElementById('Email').value;
contact = document.getElementById('Contact').value;
message = document.getElementById('Message').value;

exp = /^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/i;

num = /^(09|\+639)\d{9}$/;

if(fullname.length <= 6){
	alert("Please enter a proper name")
	return false
}

if(!exp.test(email) == true){
	alert("Enter your email properly")
	return false
}

if(!num.test(contact) == true){
	alert("Enter your contact properly")
	return false
}

if(message.length <= 5){
	alert("Please enter your message")
	return false
}

if(confirm("Do you want to send the message?")){

	var message_data = {
		Fullname: fullname,
		Contact: contact,
		Email: email,
		Message: message,
		DateofMessage: new Date().toString()
	  }
	
	  secondaryApp.database().ref().child("Messages").push(message_data)

	  alert("Message has been sent")

	  document.getElementById('Fullname').value = ""
	  document.getElementById('Email').value = ""
      document.getElementById('Contact').value = ""
      document.getElementById('Message').value = ""
}
}