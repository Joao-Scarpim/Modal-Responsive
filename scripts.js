const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")
const fade = document.getElementById("fade")
const modal = document.getElementById("modal")

const array = [openModal, closeModal]
array.forEach((button) => {
    button.addEventListener("click", () => {
        fade.classList.toggle("hide")
        modal.classList.toggle("hide")
    })
})