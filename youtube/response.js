var url = "https://www.googleapis.com/youtube/v3/search?key=&type=video&part=snippet&maxResults=15&q=";


var query, items = [], max = 0; var currentPage = 0;

(function init(){
    headerDiv();
    searchDiv();
    displayDiv()
    navigationDiv();
})();


function headerDiv() {
    const header = document.createElement("header");

    const title = document.createElement("h1");
    const titleText = document.createTextNode("Youtube Search");
    title.appendChild(titleText);
    header.appendChild(title);
  
    const body = document.querySelector("body");
    body.appendChild(header);
}
function searchDiv() {
    //input tag
    const searchBox = document.createElement("input");
    searchBox.setAttribute("type", "text");
    searchBox.setAttribute("id", "searchbox");
    
  
    const searchButton = document.createElement("button");
    searchButton.textContent = "search";
  
    //search div
    const searchDiv = document.createElement("div");
    searchDiv.classList.add("search");
    searchDiv.appendChild(searchBox);
    searchDiv.appendChild(searchButton);
  
    const body = document.querySelector("body");
    body.appendChild(searchDiv);
  
    //event listeners
    searchButton.addEventListener('click', event => {
        query = searchBox.value;
        currentPage = 0;
        loadMore(url + query);
    
    })
  }


function navigationDiv() {
    //previous button
    const previousButton = document.createElement("button");
    previousButton.classList.add("previous");
    previousButton.textContent = "Previous";
  
    //next Button
    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    nextButton.textContent = "Next";
  
    //navigation div
    const navigationDiv = document.createElement("div");
    navigationDiv.classList.add("navigation");
    navigationDiv.appendChild(previousButton);
    navigationDiv.appendChild(nextButton);
  
    const body = document.querySelector("body");
    body.appendChild(navigationDiv);
  
    previousButton.addEventListener("click", event => {
        if (currentPage === 0) return;
        currentPage -= 1;
        showData();
    });
  
    nextButton.addEventListener("click", event => {
        currentPage += 1;
        if (currentPage * 3 + 3 > max) {
            loadMore(url + query + '&pageToken=' + Token);
        }
        else showData();
    });
  }
  function displayDiv() {
    const displayDiv = document.createElement("div");
    displayDiv.classList.add("display");
  
    const body = document.querySelector("body");
    body.appendChild(displayDiv);
  }

function loadMore(queryUrl) {
    fetch(queryUrl)
        .then(resposne => {
            return resposne.json();
        })
        .then(result => {
            items = items.concat(result.items);
            max += 15;
            Token = result.nextPageToken;
            console.log(items);
            showData();
        });
}



var link = 'https://www.youtube.com/watch?v=';

function showData() {

    document.querySelector('.display').innerHTML = "";
    for (let i = currentPage * 3; i < (currentPage * 3) + 3; i++) {

        var main1 = document.querySelector('.display');
        let card = document.createElement("div");


        var image = document.createElement("img");
        image.src = items[i].snippet.thumbnails.medium.url;
        image.style = "width:100%";
        card.append(image);

        let a = document.createElement("a");
         title = document.createElement("p");
        videoId = items[i].id.videoId;
        link = link + videoId;
        title.textContent = items[i].snippet.title;
        a.setAttribute('href', link);
        a.appendChild(title);
        card.append(a);

        var description = document.createElement("p");
        description.textContent = items[i].snippet.description;
        card.append(description);
        card.classList.add("card");
        main1.append(card);

    }
}
// function previousPage() {
//     if (currentPage === 0) return;
//     currentPage -= 1;
//     showData();
// }
// function nextPage() {
//     currentPage += 1;
//     if (currentPage * 3 + 3 > max) {
//         loadMore(url + query + '&pageToken=' + Token);
//     }
//     else showData();

// }