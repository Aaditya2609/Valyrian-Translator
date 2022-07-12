var buttonTranslate=document.querySelector("#button");
var textInput=document.querySelector("#textArea");
var textOutput=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/valyrian.json";

function OnClick()
{
    var input=textInput.value;
    var translationurl=url+"?"+"text="+input;
    fetch(translationurl)
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated;
        textOutput.innerText=translatedtext;
    })
    .catch(ErrorHandler);
}
function ErrorHandler(error)
{
    console.log("Some Error has occured "+ error);
    alert("Something Went Wrong!! Please Try After Sometime");
}
buttonTranslate.addEventListener("click",OnClick)

