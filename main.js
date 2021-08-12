
let count = 0
const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const value = document.querySelector("#value")
const addFive = document.querySelector(".plusFive")
const subFive = document.querySelector(".minusFive")


addFive.addEventListener("click", function (e) {
    const action = e.currentTarget.classList;
    if (action.contains("plusFive")) {
        count += 5
    }
    value.textContent = count
})
increaseBtn.addEventListener("click", function (e) {
    const action = e.currentTarget.classList;
    if (action.contains("increase")) {
        count++
    }
    value.textContent = count
})

decreaseBtn.addEventListener("click", function (e) {
    const action = e.currentTarget.classList;
    if (action.contains("decrease")) {
        count--
    }
    value.textContent = count
})

resetBtn.addEventListener("click", function (e) {
    const action = e.currentTarget.classList;
    if (action.contains("reset")) {
        count = 0
    }
    value.textContent = count
})



subFive.addEventListener("click", function (e) {
    const action = e.currentTarget.classList;
    if (action.contains("minusFive")) {
        count -= 5
    }
    value.textContent = count
})