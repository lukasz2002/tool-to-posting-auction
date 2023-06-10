const adDescriptionTextarea = document.querySelector("#ad-description")
const adDescriptionWarning = document.querySelector(".ad-description-warning")
const adDescriptionRemain = document.querySelector(".ad-description-remain")
const adDescriptionCounter = document.querySelector(".ad-description-counter")
const productState = document.querySelectorAll(".product-state")
const sellAs = document.querySelectorAll(".sell-as")
const checkImg = `<svg class="custom-color-yellow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>`
const productChecked = document.querySelectorAll(".product-checked")
const numInputs = document.querySelectorAll(".num-input")
var invalidChars = [
    "-",
    "+",
    "e",
];

adDescriptionTextarea.addEventListener("input", () => {
    let len = adDescriptionTextarea.value.length
    if (len < 80) {
        adDescriptionWarning.innerHTML = "Min. 80 znaków. Pamiętaj o szczegółowych informacjach czy uszkodzeniach (jeżeli takie występują)"
        adDescriptionWarning.classList.remove("invisible")
        adDescriptionWarning.classList.add("visible")
        adDescriptionRemain.innerHTML = `Wpisz jeszcze przynajmniej ${80 - len} znaków`
    }
    else {
        adDescriptionWarning.innerHTML = ""
        adDescriptionRemain.innerHTML = ""
    }
    adDescriptionCounter.innerHTML = `${len}/9000`
})

adDescriptionTextarea.addEventListener("focusout", () => {
    let len = adDescriptionTextarea.value.length
    if (len < 80) {
        adDescriptionWarning.innerHTML = "Min. 80 znaków. Pamiętaj o szczegółowych informacjach czy uszkodzeniach (jeżeli takie występują)"
        adDescriptionWarning.classList.remove("invisible")
        adDescriptionWarning.classList.add("visible")
    }
})

productState.forEach((product) => {
    product.addEventListener("click", () => {
        let productMarked = product.children[0].children[1]

        productState.forEach((productInner => {
            productInner.classList.remove("custom-border-yellow")
            let productMarkedInner = productInner.children[0].children[1]
            productMarkedInner.innerHTML = ""
        }))
        product.classList.add("custom-border-yellow")
        productMarked.innerHTML = checkImg
    })
})

sellAs.forEach((product) => {
    product.addEventListener("click", () => {
        let productMarked = product.children[0].children[1]

        sellAs.forEach((productInner => {
            productInner.classList.remove("custom-border-yellow")
            let productMarkedInner = productInner.children[0].children[1]
            productMarkedInner.innerHTML = ""
        }))
        product.classList.add("custom-border-yellow")
        productMarked.innerHTML = checkImg
    })
})

numInputs.forEach((input) => {
    input.addEventListener("keypress", (evt) => {
        if(invalidChars.includes(evt.key)) {
            evt.preventDefault()
        }
    })
})

numInputs.forEach((input) => {
    input.addEventListener("focusout", () => {
        // input.innerHTML = parseFloat(input.value).toFixed(2).replace(".", ",")
        console.log(Number.parseFloat(input.value))
        console.log(typeof(input.value))
    })
})