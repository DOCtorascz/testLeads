const priceLeads = document.querySelectorAll('.leads__list-inner')

const leadsVisbl = (leadsNum) => {

  priceLeads.forEach((item, index) => {
    const animationParametr = `visbl ${leadsNum}s`
    priceLeads[index].style.animation = animationParametr;

    leadsNum += 3
  })
}

leadsVisbl(3)

const course = document.querySelectorAll('.leads__currency')

const courseChange = (event) => {

  const btnElement = event.target
  let vallet = "";
  let price = 0;

  if (btnElement.textContent === "$") {
    vallet = "₽";
    price = 100;
  } else if (btnElement.textContent === "₽") {
    vallet = "€";
    price = 110;
  } else {
    vallet = "$";
    price = 1.08
  }

  course.forEach((item) => {
    item.textContent = vallet;
    let numPrice = item.parentNode.children[1];
    let integ = 0;

    if (price === 100 || price === 1.08) {
      integ = Math.ceil(numPrice.textContent * price)
      numPrice.textContent = integ
    } else if (price === 110) {
      integ = Math.ceil(numPrice.textContent / price)
      numPrice.textContent = integ
    }
  })
}

course.forEach((item) => {
  item.addEventListener('click', courseChange)
})

const period = document.querySelectorAll('.leads__period')

const periodChange = (event) => {

  period.forEach((item) => {
    let numPrice = item.parentNode.children[1];
    let period = '';

    if (item.textContent === "/month") {
      item.textContent = "/Day";
      period = Math.ceil(numPrice.textContent / 30);
    } else {
      item.textContent = "/month";
      period = Math.ceil(numPrice.textContent * 30);
    }

    numPrice.textContent = period;
  })

}

period.forEach((item) => {
  item.addEventListener('click', periodChange)
})
