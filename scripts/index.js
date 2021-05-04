const cardStack = document.getElementsByClassName("card-stack")[0];
const addtionalCards = document.getElementsByClassName("additional-card");

let additionalCardsHeight = () => {
    console.log(addtionalCards);
    let sum = 0;

    for (const card of addtionalCards) {
        sum += card.scrollHeight;
    }

    return sum;
};

let sumOfHeights = () => {
    return cardStack.scrollHeight + additionalCardsHeight();
};
let alreadyRun = false;

cardStack.addEventListener("click", () => {
    if (alreadyRun) return;
    cardStack.style.height = sumOfHeights() + "px";

    addtionalCards[0].style.transform = "translateY(-8%)";
    addtionalCards[1].style.transform = "translateY(84%)";
    alreadyRun = true;
});
