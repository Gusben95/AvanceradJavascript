const wordInput = document.getElementById("inputWords");
const button = document.getElementById("button");
const wordSelector = document.getElementById("wordSelector"); 
let oldWord = "";
let wordLength = 0;
let startWord  = ["FOUR", "EYE", "TIGER", "WHEAT"];
let lastWord =  ["FIVE","LID", "ROSES", "BREAD"];
let wordList =  [];
let targetWord = "";
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
            if (theWord == startWord[1]) {targetWord = lastWord[1] }
       else if (theWord == startWord[2]) {targetWord = lastWord[2] }
       else if (theWord == startWord[3]) {targetWord = lastWord[3] }
       else if (theWord == startWord[4]) {targetWord = lastWord[4] }
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