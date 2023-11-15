

let userName = getUserName();

let welcome = document.createElement("p");
welcome.textContent = `Welcome to Craft Club ${userName}! Please select a craft you are interested in to find out more.`;
document.body.appendChild(welcome);
displayButtons()

//array to store colours of wool in stock
const woolShop = ["red", "orange", "yellow", "green", "blue" , "indigo", "violet" ];

//function to retrieve user name
function getUserName(){
  let userName = null;
  while (userName === "" || userName === null){
  userName = prompt("Hello, please enter your name.");
  }
    console.log("Name of user ("+userName+") successfully collected");
  return userName;
}

//function to show craft option buttons, appears after user name is recieved
function displayButtons() {
document.getElementById("allButtons").style.display = "block";
}

//check if wool shop stocks user choice of colour, adds to stock if not already present, runs printWoolShop function if new element is added
function woolShopFunction(){
  const userWool = prompt("Please enter a colour for wool to see if we stock it.")
  var stockIt=false;
  for (let i=0; i< woolShop.length; i++){
   if (userWool.toLowerCase()===woolShop[i]) {
     alert("Yay, we already stock "+userWool+" wool!");
     stockIt=true;
   }
  }
  if(stockIt===false){
     alert("Oh no! We don't stock that one, we will have to order some "+userWool+" coloured wool in.");
      woolShop.push(userWool);
      console.log(userWool+" coloured wool has been added to the wool shop");
    printWoolShop();
  }
}

//function to print content of wool shop to console
function printWoolShop() {
  console.log("The wool shop currently stocks the following colours of wool: "+woolShop)
}

function getVoucher(){
  let voucher = Math.round(Math.random()*10+10); //all discounts range £10-£20
  alert("Wow, youve been offered £"+voucher+" off your next shop! Happy shopping :)")
  console.log("A £"+voucher+" discount has been offered to user")
}

//use addEventListener to display crochet text after button is pressed and runs woolShopFunction
crochetButton.addEventListener('click',function crochetFunction() {
  var text = document.getElementById("crochetText");
  text.style.display = "block";
  text.style.color = "blue";
  woolShopFunction();
});

//shows knitting text after button is pressed and runs woolShopFunction
function knittingFunction() {
  var text = document.getElementById("knittingText");
  text.style.display = "block";
  text.style.color = "red";
  woolShopFunction();
}

//shows painting text after button is pressed
function paintingFunction() {
  var text = document.getElementById("paintingText");
  text.style.display = "block";
  text.style.color = "purple";
}

//shows sewing text after button is pressed and runs function to offer user money off
function sewingFunction() {
  var text = document.getElementById("sewingText");
  text.style.display = "block";
  text.style.color = "mediumvioletred";
  getVoucher();
}

//shows sketching text after button is pressed
function sketchingFunction() {
  var text = document.getElementById("sketchingText");
  text.style.display = "block";
  text.style.color = "green";
}

//after cross stitch button pressed, displays text and gives suggestions list in timed intervals
function crossStitchFunction() {
  var text = document.getElementById("crossStitchText");
  text.style.color = "orangered";
  text.style.display = "block";

  const list = document.getElementById("crossStitchIdeas");
  const items = list.getElementsByTagName("li");
  showNextItem();

  function showNextItem(){
    for(let i=0;i<items.length;i++){
      setTimeout(function(){items[i].style.visibility = "visible"},1000*i);
    }
  }
}

