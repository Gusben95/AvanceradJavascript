const wordInput = document.getElementById("inputWords");
const button = document.getElementById("button");
const wordSelector = document.getElementById("wordSelector"); 
let oldWord = "";
let wordLength = 0;
let startWord  = ["FOUR", "EYE", "TIGER", "WHEAT"];
let lastWord =  ["FIVE","LID", "ROSES", "BREAD"];
let wordList =  [];
async function checkWord(word) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word).then( async(response) => {
        if(!response.ok){
            const data = await response.json();
            console.log(data)
            console.log("404")
            wordInput.value = oldWord
        }
        else{ 
        oldWord = word; 
        const data = await response.json();
        console.log(data);
        console.log("ok");
        checkWordLength(word)
    } })
}
function checkWordLength(word) {
     if (word.length === wordLength) {
        checkWordChange(word); 
     }
     else{
         console.log("Wrong length")
     }
}
function chooseWord() {
 let theWord = wordSelector.value;
 console.log(theWord)
  if (startWord.filter(word => word == theWord)){
      console.log("the Word is" + theWord);
      showStartWord.innerHTML = theWord;
      wordList = [];
      wordList.push(theWord);
      wordLength = theWord.length;
      let targetWord = lastWord[] // Hur smäller jag in så att jag hittar indexet för 
  }
  else{console.log("Något gick fel")}
}
wordInput.addEventListener("keypress" , (event) => {
    if(event.key === "Enter"){
    checkWord(wordInput.value);
}
})
button.addEventListener('click' , () => {
   chooseWord();
})
function checkWordChange (word){
    const newWordArray = word;
    const oldWordArray = wordList[wordList.length - 1];
    let counter = 0; 
    for (let i = 0; i < newWordArray.length; i++){
        if (newWordArray[i] !== oldWordArray[i]){
            counter++;
        }
    }
        if(counter > 1){
        console.log("too many changes")
        wordInput.value = wordList[wordList.length -1]
    }
    else{
        console.log("word is accepted")
        wordList.push(word) 
        if (word === targetWord) {

        }
    }
}