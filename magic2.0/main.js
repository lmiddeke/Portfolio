//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('button').addEventListener('click', chooseCard)

function chooseCard(){
    let card = document.querySelector('input').value
    let url = `https://api.magicthegathering.io/v1/cards?name=${card}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.cards)
      document.querySelector('h2').innerText = data.cards[0].name
      document.querySelector('img').src = data.cards[0].imageUrl
      document.querySelector('#mana').innerText = data.cards[0].manaCost
      document.querySelector('#type').innerText = data.cards[0].originalType
      document.querySelector('p').innerText = data.cards[0].originalText
      document.querySelector('#power').innerText = data.cards[0].power || "no power level"
      document.querySelector('#toughness').innerText = data.cards[0].toughness

      

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}



// function convertUndefined(val){
//   if(tough === 'undefined'){
//     return ''
//   }else{
//     return tough
//   }
// }

// function convertUndefined2(val){
//   if(pow === 'undefined'){
//     return ''
//   }else{
//     return pow
//   }
// }

// function convertUndefined3(val){
//   if(mana === 'undefined'){
//     return ''
//   }else{
//     return mana
//   }
// }