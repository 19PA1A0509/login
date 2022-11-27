var objPeople = [
	{ // Object @ 0 index
		username: "sam",
		password: "codify"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
    console.log("lala")
	for(var i = 0; i < objPeople.length; i++) {
        console.log("lalala")
        console.log(objPeople[i].username,objPeople[i].password,username,password)
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log("lalalalalalala")
			
		}
        else{
	    alert("wrong pass")
        }
    }
}