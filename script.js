var database = [
    {
        username: "Ayaoba",
        password: "abosede"
    },
    {
        username: "Samuel",
        password: "esther"
    },
    {
        username: "victor",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Esther",
        timeLine: "so tired from all the learning"
    },
    {
        username: "Sally",
        timeLine: "Javascript is sooo coooool"
    },
    {
        username: "divine",
        timeLine: "Javascript is pretty amazingggggg"
    }
];

var userNamePrompt = prompt("whats your username");
var passwordPrompt = prompt("whats your password");


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
    }
  }
    return false;
}

function signIn(username, password) {
   if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function() {
   if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.append(li);
    input.value = "";
   }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.which === 13) {
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
     ul.append(li);
     input.value = "";
    }
 })
