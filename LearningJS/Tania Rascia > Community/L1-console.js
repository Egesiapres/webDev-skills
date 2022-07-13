// How To Use the JavaScript Developer Console

// shortcut: cmd + option + J (or K)
// arrow up to have the immediately previous cmd (as in terminal)

alert("Hello World!");
console.log("Hello World!");
console.log(2 + 6);
console.log(34348.2342343403285953845 * 4310.23409128534);

let today = new Date();
console.log("Today's date is " + today);

// after opening index.html
// type in the console log the let upon and this
document.body.innerHTML = "<h1>Today's date is " + today + "</h1>";

// modify the style of page (bg and text color)
document.body.style.backgroundColor = "lightblue";
document.body.style.color = "white";

// create a paragraph
let p = document.createElement("P");
// create the content of the p
let t = document.createTextNode("Paragraph text.");
// insert the content of t in p
p.appendChild(t);
// insert the p in the body of the document
document.body.appendChild(p);
