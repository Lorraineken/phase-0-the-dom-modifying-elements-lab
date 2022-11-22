// Write your code here!
//const main = document.getElementsByTagName("main");
//const secondChild = main.querySelector("main"); 
main.remove()

const newHeader = document.createElement("h1");
//const currentHeader=document.getElementById("victory")
//document.body.insertBefore(newHeader,currentHeader)
newHeader.id='victory';
newHeader.textContent = "LORRAINE is the champion";
document.body.append(newHeader);



//const h1 = document.createElement("h1");

//newHeader.append(h1);
