function baseAlert(message)
{
    alert(message);
}

// Test some code
function test()
{
    baseAlert(new Date());
    var text = "This is an alert!";
    baseAlert(text);
  
    var name = prompt("What is your first name?", "name here");
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    name = name.replace(/n/g, "z");
    var age = prompt("How old are you?");
    if (age > "35")
    {
	alert("You are old " + name);
    }
    else
    {
	alert("You're still young " + name);
    }
    var newage = age + 2;
    alert("Your name is " + name + " and you are " + newage);

    var names = ["Jon", "Anne", "Dave", "Sam"];
    var sub = names.slice(1,3);
    alert(sub);
    names.splice(1, 0, "Fred", "Phil");
    alert(names);

}


function checkEmail(fieldID)
{
    var val = document.getElementById(fieldID).value;
    if (val == ""){
	alert("Email address required!");
    }
    else{
	alert("Thank you");
    }
}

//Replace the text with this text
function expandMe()
{
    var expanded = "Blah blah blah lkjsd lkje lkjdsfsd blah dsfd dfsdf dfsf dsrefsdf dfsdsfsd dd s dsfdsfwf sdf sdfgrg dfsd sdfsdf dsfsdf.  sdlfw sdlkjfs djslkjfds sjlkwfd  k sd f lkjsfd.<p>This is a new paragraph that was previously hidden.  BOO! <a href=\"javascript:void(0);\" onClick=\"collapseMe();\"><em> Collapse Text</em></a></p>";

    document.getElementById("expandText").innerHTML = expanded;
}

//Collapse the text
function collapseMe()
{
    var collapsed = "Blah blah blah <a href=\"javascript:void(0);\" onClick=\"expandMe();\"><em>Click for more.</em></a>";
    document.getElementById("expandText").innerHTML = collapsed;
}

function swapPic(fieldID, pic)
{
    document.getElementById(fieldID).src = pic;
}

function testDOM()
{
    var node = document.childNodes[1].childNodes[1].childNodes[1].firstChild;
    node.nodeValue = "Will this work?";
    //alert(node.nodeName + "  " + node.nodeValue);
    var node2 = document.getElementsByTagName("p");
    alert(node2[1].innerHTML);
}

function openNewWindow()
{
    var popup = window.open("popup.html", "win name", "width=420, height=380, left=200, top=100");
}

function checkForPopBlocker()
{
    var testPop = window.open("", "", "width=100, height=100");
    if (testPop === null)
    {
	alert("Please disable your popup blocker.");
    }
    testPop.close();
}

var b1 = document.getElementById("buttontest");
b1.onclick = openNewWindow;

//Draw a yellow circle on the specified canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
//context.lineWidth = 2;
//context.stroke();
//context.fillStyle = "black";
