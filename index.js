// Get the modal
function modal(id)
{
    console.log(id);
    let modal = document.getElementById("modal");
    console.log("modal");
    // Get the button that opens the modal
    let btn = document.getElementById(id);
    console.log(btn);
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    span.onclick=function(){
        modal.style.display="none";
    }
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

function fileupload()
{
    let modal = document.getElementById("filecreation");
    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[1];
    span.onclick=function(){
        modal.style.display="none";
    }
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function starred(id)
{
    console.log("inside");
    // let check=document.style.getElementsByClassName("star");
    // console.log(check[0]);
    let ele=document.getElementById(id);
    let parent=ele.parentElement;
    console.log(parent);
    // console.log(ele.style.fill);
    if(ele.style.fill=="white")
    {
        console.log("insideeee");
        ele.style.fill="rgb(255, 238, 0)"; //changing color to yellow starring data
        // var admin=document.getElementById("starred_data");
        // admin.innerHTML += `<p>dat addeddddd</p>`;
    }
    else
    {
        ele.style.fill="white";
    }
    event.stopPropagation();
}




async function getUser() {
    const api_url="news.json";
    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);
    console.log(response);
    // Parsing it to JSON format
    const data = await response.json();
    console.log(data);
    var news_data=document.getElementById("news");
    // Retrieving data from JSON
    let n=data.articles.length;
    let start= Math.floor(Math.random() * (n - 0 -10 + 1));
    console.log(start);
    for(let i=0; i<15;i++)
    {
        let news=data.articles[start+i];
        console.log(news);
        let title = news.title;
        let urllink = news.url;
        let photo = news.urlToImage;
        if(photo==null){
            continue
        }
        let news_content = `            
        <div class="news_image" onclick="window.location.href = '${urllink}';" style="background-image: url(${photo});">
            <div class="title">
                <p id=${title}>${title}</p>
            </div>
        </div>`;
        news_data.innerHTML += news_content;
    }
}

// Calling the function
getUser();




var add=document.getElementById("add");
for(let i=0; i<10; i++)
{
let new_id="data"+i;    
console.log(new_id);
var file=`<div class="available" id=${new_id} onclick="modal(id)">
<img src="no-image.png" class="no_image"/>
<div class="subject">
<p  class="available_text">Patient: Revi</p>
<p  class="available_text">Case: Neuro disorder </p>

</div>
<svg xmlns="http://www.w3.org/2000/svg" id=${i} class="star" onclick="starred(id)" style="margin-left: auto; fill: white; scale: 0.9;" height="40" viewBox="0 96 960 960" width="40"><path d="m263.002 934.458 57.307-246.766L128.85 521.77l252.613-21.922L480 267.158l98.537 232.69L831.15 521.77 639.691 687.692l57.307 246.766L480 803.537 263.002 934.458Z"/></svg>        
</div>` ;
add.innerHTML+=file;
}


