const post = document.querySelector("#post");
const status = document.querySelector("#status")
const timeline = document.querySelector(".timeline")
const btncolor = document.querySelectorAll(".btn-color")
//chon mau
let color="";
btncolor.forEach(function (item) {
    item.addEventListener("click", () => {
        btncolor.forEach(function (item) {
            status.classList.remove(item.value);
        })
        status.classList.add(item.value);
        color=item.value;        
    })   
})
//post
post.addEventListener("click", () => {
    if (status.value != "") {                
        if (status.value.length <= 50) {
            timeline.insertAdjacentHTML("afterbegin", "<div class='my-status big-text "+color+"' >"+status.value+"</div>");
            status.value = "";
        }
        else {
            timeline.insertAdjacentHTML("afterbegin", "<div class='my-status "+color+"' >"+status.value+"</div>");
            status.value = "";
        }
    }
})



