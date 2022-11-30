const chat = document.querySelector(".chat")
const send = document.querySelector("#send")
const message = document.querySelector("#message")
// Khi click chuot vao nut send, noi dung #message se duoc them vao .chat
const autoScroll = (node) => {
    node.scrollTop = node.scrollHeight;
}
send.addEventListener("click", () => {
    if (message.value != "") {
        chat.insertAdjacentHTML("beforeend", '<div class="box-msg msg-left">' + message.value + '</div>')
        message.value = ""
    }
    autoScroll(chat)
})
message.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        if (message.value != "") {
            chat.insertAdjacentHTML("beforeend", '<div class="box-msg msg-left">' + message.value + '</div>')
            message.value = ""
        }
    }
    autoScroll(chat)
})
const show = document.querySelector(".btn-show")
const cover = document.querySelector(".cover")
show.addEventListener("click", () => {
    cover.classList.toggle("mystyle")

})


