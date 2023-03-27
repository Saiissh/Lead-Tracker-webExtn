
//extra work required

// function btnclicked(){
//     console.log("button clicked");
// } 

// var btnclk=document.getElementById("button-id");

// btnclk.addEventListener("click",function(){
//     console.log("btn clicked");
// })


// var boxclk=document.getElementById("box");
// boxclk.addEventListener("click",function(){
//     console.log("the box is clicked")
// })

// function Buyme(){
//     container.innerHTML+="<p>thanks for buying</p>";

// }

// btnclk.addEventListener("click",function(){
    // myleads.push(inputel.value);
    // console.log(myleads);
    // console.log("btn clicked");
    // for(let i=0;i<myleads.length;i++)
    // {
    //     Document.getElementById("output").innertext+=myleads[i]+" ";
    // }
// })

// let myleads=`["hi"]`;
// console.log(typeof myleads);

// myleads=JSON.parse(myleads);

// myleads.push("hello");

// console.log(typeof myleads);
// console.log(myleads);


// myleads=JSON.stringify(myleads);
// console.log(typeof myleads);


let myleads=[];

const inputel=document.getElementById("input-el");
const inputbtn=document.getElementById("button-id");

let tabs=[];
let tabBtn =document.getElementById("button-save");
tabBtn.addEventListener("click",function(){
       //here we will target url and then save that url into local storage
//this will initially throw a error if we run using vs bcoz here this query requres actually chrome website and not that we are currently onn
       chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads)); 
        displaysaved();

    });
})

//this is done to make sure that..if my internal storage has some data..present initilaly..then firstly display that data immediately
let leadsfromLocalStorage=JSON.parse(localStorage.getItem("myleads"));
if(leadsfromLocalStorage) //if true..that is data present
{
    myleads=leadsfromLocalStorage;
    displaysaved();
}


//when deleteall clicked...clear textfield,clear inner storage,clear arr also
let deleteBtn=document.getElementById("button-id2");
deleteBtn.addEventListener("dblclick",function(){
   
    myleads=[];
    localStorage.clear();
    
    document.getElementById("output").innerText="";
    myleads=[];
    localStorage.clear();

    
});


//when saveinput clicked..run addtoarr function
inputbtn.addEventListener("dblclick",addtoarr);
function addtoarr(){
   
    //make sure input is non-empty
    if((inputel.value).length>0)
    myleads.push(inputel.value);
    else{
        alert("Enter Something")
    }

    inputel.value="";

    /**
JSON.stringify() converts a JavaScript array into a JSON string ->stored in localStorage. -> so that it can be accessed and retrieved later even if the user closes the browser 
     */
//entire array is stored locally with key=myleads..everytime we overide that key only
    localStorage.setItem("myleads",JSON.stringify(myleads)); 
     
    //jeesehi eik entry krdi..usko dispkay kro using displaytbn
    displaysaved();
}

//function to display saved which is stored in array
function displaysaved(){
    var outdisplay="";
   
    for(let i=0;i<myleads.length;i++)
    {

        //adhic sara input kela..n then eikdum chnge it.
        outdisplay+=`<li>
        <a target='_blank' href='${myleads[i]}'>
        ${myleads[i]}
        </a>
        </li>
        `
       
    }
    document.getElementById("output").innerHTML=outdisplay;
}








