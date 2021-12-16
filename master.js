document.querySelector("h3").addEventListener("click", myFunc);

function myFunc(){
    document.querySelector("h1").innerHTML = "CHanged 2"
}

let weekly = [
    work = {current: "10hrs", previous: "7hrs"},
    play = {current: "10hrs", previous: "7hrs"},
    study = {current: "10hrs", previous: "7hrs"},
    exe = {current: "10hrs", previous: "7hrs"},
    social = {current: "10hrs", previous: "7hrs"},
    self = {current: "10hrs", previous: "7hrs"},
]

let daily =  [
    work = {current: "15hrs", previous: "7hrs"},
    play = {current: "15hrs", previous: "7hrs"},
    study = {current: "15hrs", previous: "7hrs"},
    exe = {current: "15hrs", previous: "7hrs"},
    social = {current: "15hrs", previous: "7hrs"},
    self = {current: "15hrs", previous: "7hrs"},
]

let cards = ["work","play","study","exe","social","self"]


function switchPeriod (){
    for(let i = 0;i<3;i++){
        document.querySelectorAll(".option")[i].addEventListener("click",{
            
        })
    }
    
}
