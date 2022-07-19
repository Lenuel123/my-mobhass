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
	

document.getElementById("addmessage").addEventListener("click", addmsg);  

function addmsg(){
fullname = document.getElementById('Fullname').value;
email = document.getElementById('Email').value;
contact = document.getElementById('Contact').value;
message = document.getElementById('Message').value;

exp = /^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/i;

num = /^(09|\+639)\d{9}$/;

if(fullname.length <= 2 ){
	alert("Please enter your Fullname")
	return false
}

if(email.length <= 0){
	alert("Please enter your gmail")
	return false
}

if(!exp.test(email) == true ){
	alert("We only accept gmail, please enter it properly")
	return false
}

if(contact.length <= 0){
	alert("Please enter your contact number")
	return false
}

if(!num.test(contact) == true){
	alert("Please enter your number properly -- +639XXXXXXXXX or 09XXXXXXXX")
	return false
}

if(message.length <= 0 ){
	alert("Please enter your message")
	return false
}
if(confirm("Do you want to send the message?")){

	var message_data = {
		Fullname: fullname,
		Contact: contact,
		Email: email,
		Message: message,
		DateofFeedback: new Date().toString()
	  }
	
	  secondaryApp.database().ref().child("feedback").push(message_data)

	  alert("Message has been sent")

location.reload();

}
}