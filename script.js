const cards = [
    ["Cat", "meow"],
    ["Dog", "bark"],
    ["Horse", "neigh"]
]

function flipCard(card, index){
    let text = ' '

    if (card.dataset.flipped === 'true'){
        card.dataset.flipped = 'false'
        text = cards[index] [0]
        
    }
    else{
        card.dataset.flipped = 'true'
        text = cards[index] [1]
    }

    card.innerHTML = "<p>" + text + "<\p>"
}

function displayCards(){
    for(let i = 0; i < cards.length; i++){
        let curCard = cards[i]
        let front = curCard[0]
        let back = curCard[1]

        //creating the card
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        let text = document.createElement('p')
        text.innerText = front

        cardDiv.appendChild(text)

        cardDiv.dataset.flipped = 'false'

        cardDiv.addEventListener('click', ()=>flipCard(cardDiv, i))
        let allTheCards = document.getElementById('cards')
        allTheCards.appendChild(cardDiv)

    }
}



displayCards()