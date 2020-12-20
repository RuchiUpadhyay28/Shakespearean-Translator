var input=document.querySelector("#inpTxt");
var output=document.querySelector("#OutTxt");
var serverURL="https://api.funtranslations.com/translate/shakespeare.json";

function getTranslation(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("Error Occured!", error);
    alert("Some Error Occured. Please try again after 1 hour");
}
function clickHandler(){
    var userInput=input.value;
    fetch(getTranslation(userInput))
        .then(Response => Response.json())
        .then(json => 
            output.innerText=json.contents.translated)
        .catch(errorHandler);
}

document.querySelector("#btnTranslate").addEventListener("click",clickHandler);