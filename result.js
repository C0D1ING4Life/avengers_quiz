function reset(){
    location.href = "index.html"
}

var points = sessionStorage.getItem("points")

var head_result = document.getElementById("result-header")
var body_result = document.getElementById("result-body")

if(points >= 4){
    head_result.innerText = "That's nice! You have got "+points+ " out of 6 right"
    body_result.innerText = "You worked hard and it paid off! Nice work figuring out these tough questions, you earned it Buddy!"
}
else{
    head_result.innerText = "Oops! You have got only "+points+ " Out of 6"
    body_result.innerText = "Marvel have created more Avengers than even the geekiest of geeks could remember, but that shouldn't mean you shouldn't try."
}