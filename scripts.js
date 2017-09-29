//Create an array of Friends
var myFriends=["Tyffani", "Kiara", "Kirsten", "Jeff", "Brandon"];
//my document will need buttons, divs,paragraphs and h3 so...
//var makeContainer=document.createElement('div');
//var makeButton=document.createElement('button');
//var makeH3=document.createElement('h3');had to be a local variable because of scope
//var makePara=document.createElement('p');
/*my buttons need to say different things at different points
without clashing with each other and i don't want to create a
bunch of variables that all create a different button. so I will create
a function that will make the different buttons and not interfere with each
other...hopefully*/

//create the friend button
function friendButton(){
    var makeContainer=document.createElement('div');
    var makeButton=document.createElement('button');
    var textFriend=document.createTextNode("Friends!");
    var makeFriendButton= makeButton.appendChild(textFriend);
    makeContainer.appendChild(makeButton);
    document.body.appendChild(makeContainer);
    makeContainer.className="button-container";
    makeButton.id="friend-button";
    listFriends=document.getElementById("friend-button");
    }
//create the singButton
function singButton(friend){
    var makeContainer=document.createElement('div');
    var makeButton=document.createElement('button');
    var textSing=document.createTextNode("Sing!");
    var makeSingButton= makeButton.appendChild(textSing);
    makeContainer.appendChild(makeButton);
    document.body.appendChild(makeContainer);
    makeContainer.className="button-Container";
    makeButton.id="sing-button";
    singSong=document.getElementById("sing-button");
    singSong.addEventListener("click", function(){
        for (var i=0; i<myFriends.length; i++){
        for (var e = 99; e > 0; e--) {
            if (e > 2) {      
                var getSongContainer= document.getElementsByClassName("friends");
                var songContainer= getSongContainer[i];     
                var para=document.createElement('p');
                var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friend + " takes one out, clears it all out, "+ (e - 1) + " lines of code in the file.");
                para.appendChild(song);
                songContainer.appendChild(para); 
                //document.body.appendChild(songContainer);                   
            }
            else if (e ===2) {
                var getSongContainer= document.getElementsByClassName("friends");
                var songContainer= getSongContainer[i]; 
                var para=document.createElement('p');
                var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friend + " takes one out, clears it all out, "+ (e - 1) + " line of code in the file. ");
                para.appendChild(song);
                songContainer.appendChild(para);
                //document.body.appendChild(songContainer); 
            }

            else if (e===1){
                var getSongContainer= document.getElementsByClassName("friends");
                var songContainer= getSongContainer[i]; 
                var para=document.createElement('p');
                var song=document.createTextNode(" 1 line of code in the file, 1 line of code; " + friend + " takes one out, clears it all out, no more lines of code in the file.");
                para.appendChild(song);
                songContainer.appendChild(para);
                return;
                //document.body.appendChild(songContainer);                  
            }
        }  
    }  


    })
    
}
/*I originally used the variables for div and h3 that i created above but the
the function will not cycle through the loop for the variable if it is not a local variable(why? scope? yup scope)*/
document.addEventListener("DOMContentLoaded", function(){
    friendButton();
    listFriends.addEventListener("click",function(){
        for (var i=0; i<myFriends.length; i++){
            var friendContainer=document.createElement('div');
            friendContainer.className="friends";
            friendH3= document.createElement ('h3');
            var textName=document.createTextNode(myFriends[i]);
            friendH3.appendChild(textName);
            friendContainer.appendChild(friendH3);
            document.body.appendChild(friendContainer);
            singButton()
            

            
        }
    })


})
/*document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Tyffani", "Kiara", "Kirsten", "Jeff", "Brandon"];
    var buttonContainer = document.createElement('div');
    var btn = document.createElement('button');
    var sing = document.createTextNode("Sing!");
    btn.appendChild(sing);
    buttonContainer.appendChild(btn);
    document.body.appendChild(buttonContainer);
    buttonContainer.id = "button-container";
    btn.id = "sing-btn";
    var singBtn = document.getElementById("sing-btn")
    singBtn.addEventListener("click", function () {
        for (var i = 0; i < friends.length; i++) {
            var friendContainer=document.createElement('div');
            var friendName=document.createElement('h3');
            var name= document.createTextNode(friends[i]);
            friendName.appendChild(name);
            friendContainer.appendChild(friendName);
            document.body.appendChild(friendContainer);
           friendContainer.className="friends";
           friendName.id="name";
            for (var e = 99; e > 0; e--) {
                if (e > 2) {                
                    var para=document.createElement('p');
                    var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friends[i] + " takes one out, clears it all out, "+ (e - 1) + " lines of code in the file.");
                    para.appendChild(song);
                    friendContainer.appendChild(para);                    
                }
                else if (e ===2) {
                    var para=document.createElement('p');
                    var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friends[i] + " takes one out, clears it all out, "+ (e - 1) + " line of code in the file. ");
                    para.appendChild(song);
                    friendContainer.appendChild(para); 
                }

                else if (e===1){
                    var para=document.createElement('p');
                    var song=document.createTextNode(" 1 line of code in the file, 1 line of code; "+ friends[i] + " takes one out, clears it all out, no more lines of code in the file.");
                    para.appendChild(song);
                    friendContainer.appendChild(para);                   
                }


            }
        }
    })
})
*/