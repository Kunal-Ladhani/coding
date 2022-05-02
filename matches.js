// write js code here corresponding to matches.html

var schedule = JSON.parse(localStorage.getItem("schedule")) || [];
var favourites = JSON.parse(localStorage.getItem("favourites")) || [];

displayData(schedule);

// function reverse(str) {
//     var l=0, r=str.length-1;
//     while(l<r){
//         var temp = str[r];
//         str[r] = str[l];
//         str[l] = temp;
//         l++;
//         r--;
//     }
//     return str;
// }

function displayData(data) {
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNumber;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;
        
        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;
        
        var td4 = document.createElement("td");
        td4.innerText = elem.date;
        
        var td5 = document.createElement("td");
        td5.innerText = elem.venue;
        
        var td6 = document.createElement("td");
        td6.innerText = "Add as Favourites";
        td6.style.color = "green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function() {
            addToFavourite(elem);
        });


        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });

    
    function addToFavourite(matchData) {
        favourites.push(matchData);
        localStorage.setItem("favourites",JSON.stringify(favourites));
    }
}

document.querySelector("#filterVenue").addEventListener("change",venueFilter);

function venueFilter() {
    var selected = document.querySelector("#filterVenue").value;

    var filteredData = schedule.filter(function(elem) {
        return selected == elem.venue;
    });

    displayData(filteredData);
}
