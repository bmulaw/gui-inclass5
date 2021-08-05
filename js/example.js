// ADD NEW ITEM TO END OF LIST
var page = document.getElementById('page');
page.innerHTML += "<li class='cool' id='six'> cream </li>";

// ADD NEW ITEM START OF LIST
page.innerHTML = "<li class='cool' id='five'> kale </li>" + page.innerHTML;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// https://www.w3schools.com/jsref/prop_html_classname.asp
page.className = "cool";

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2 = document.getElementsByTagName('h2');
var allList = document.getElementsByTagName('li');
for (var li of allList){
    li.className = "cool";
}
h2[0].innerHTML += " " + allList.length;
