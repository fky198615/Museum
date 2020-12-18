// get idea and reference from https://www.w3schools.com/howto/howto_js_slideshow.asp 
//and https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-er
//ror-occur for slide show
var indexForArrow = 0;

let currentSlide = document.getElementsByClassName("imageBox");
let currentDot = document.getElementsByClassName("dot");
let leftClass = document.getElementsByClassName("left");
let rightClass = document.getElementsByClassName("right");

//get idea and reference from https://www.w3schools.com/jsref/met_win_setinterval.asp
//and https://www.w3schools.com/jsref/jsref_parseint.asp and TA name Siyuan Yao and
//piazza @154 and https://www.w3schools.com/jsref/jsref_obj_date.asp for count
//count
let currentTime = new Date();
let end = new Date("May 10, 2020 17:00:00");
let time = Math.floor((end - currentTime)/1000);
let timeText = time.toLocaleString();
let numberClass = document.getElementsByClassName("numberBar");
numberClass[0].innerHTML = timeText;


setInterval(function(){
    let numberClass = document.getElementsByClassName("numberBar");
    let numberFromHtml = numberClass[0].textContent;
    let number = numberFromHtml.replace(/\D/g,'');
    let numberCount = parseInt(number);
    let newNum = numberCount - 1;
    numberClass[0].innerHTML = newNum.toLocaleString()}, 1000);



//slide show
hideSlide();

currentSlide[0].style.display = "block";
currentDot[0].style.backgroundColor = "rgb(151, 150, 150)";


function hideSlide(){
    for(let i = 0; i < currentSlide.length; i++)
   {
      currentSlide[i].style.display = "none";
   }
}

function show(n){
    hideSlide();
    currentSlide[n].style.display = "block";
    currentDot[n].style.backgroundColor = "rgb(151, 150, 150)";
    
    var index = 0;
    while(index < currentDot.length)
    {
        if(index != n)
        {
            currentDot[index].style.backgroundColor = "rgb(194, 192, 192)";
        }

        index++;
    }
    
    indexForArrow = n;
}

function goToNext()
{
   if(indexForArrow == currentSlide.length - 1)
   {
       indexForArrow = -1;
   }
   
   indexForArrow = indexForArrow + 1;
   
   hideSlide();
   currentDot[indexForArrow].style.backgroundColor = "rgb(151, 150, 150)";
   currentSlide[indexForArrow].style.display = "block";
   
   var index = 0;
   while(index < currentDot.length)
   {
       if(index != indexForArrow)
       {
           currentDot[index].style.backgroundColor = "rgb(194, 192, 192)";
       }

       index++;
   }
}

function goToPrevious()
{
    if(indexForArrow == 0)
   {
       indexForArrow = currentSlide.length;
   }
   
   indexForArrow = indexForArrow - 1;
   hideSlide();
   currentDot[indexForArrow].style.backgroundColor = "rgb(151, 150, 150)";
   currentSlide[indexForArrow].style.display = "block";

   var index = 0;
   while(index < currentDot.length)
   {
       if(index != indexForArrow)
       {
           currentDot[index].style.backgroundColor = "rgb(194, 192, 192)";
       }

       index++;
   }
}

//get idea and reference from 
//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
leftClass[0].addEventListener("click", goToPrevious);
rightClass[0].addEventListener("click", goToNext);


// mouse on and mouse out get idea and reference https://www.w3schools.com/jsref/event_onmouseout.asp
//and piazza @304
function mouseOn(n){
    currentDot[n].style.backgroundColor = "rgb(151, 150, 150)";
}

function mouseOut(n){
    currentDot[n].style.backgroundColor = "rgb(194, 192, 192)";
    
    currentDot[indexForArrow].style.backgroundColor = "rgb(151, 150, 150)";
}

