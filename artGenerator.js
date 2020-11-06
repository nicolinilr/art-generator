//Arrays containing strings to insert into the final art description
const singularNouns = ['cat','dog','bike','door','dragon','bank','advanced component','Javascript developer', 'chair', 'car', 'spaceship' ];
const adjectives = ['red', 'angry', 'loud','blue','large','small','excited','sheepish','giant','rowdy','bored','poor','steady'];
const verbs = ['petting','shooting','riding','spotting','driving','eating','obeying','fighting','arm wrestling','igniting','programming'];

//Determine how many objects should be in both halves of the description (bewtween 1-5)

const numFirst = Math.ceil(Math.random()*5);
const numSecond = Math.ceil(Math.random()*5);

//Function to randomly generate array of 0-3 adjectives
const adjectivesGenerator = () =>{
    //Flip 3 coins, to generate up to 3 adjectives
    let coinFlips = [Math.random(),Math.random(),Math.random()];
    let adjReturn = [];

    coinFlips.forEach(flip =>{
        //Each flip has a 25% chance to generate an adjective (4-sided coins hoho!)
        if (flip<0.25){
            //Choose a random word from the adjectives source array
            let newAdj = adjectives[Math.floor(Math.random()*adjectives.length)];
            //This while loop checks if our array to return already includes this adjective
            //If it finds it is duplicate, it selects a new adjective and checks again, until it is unique
            while(adjReturn.includes(newAdj)){
                newAdj = adjectives[Math.floor(Math.random()*adjectives.length)];
            };
            
            //Push our word into the return array for adjectives
            adjReturn.push(newAdj);
        };
    });

    //Return our final array, containing between 0-3 adjectives
    return adjReturn;
};

//Funtion to randomly generate a noun, and pluralize it if there is more than one
const nounGenerator = (num) =>{
    //Select the noun in question
    let noun = singularNouns[Math.floor(Math.random()*singularNouns.length)];

    //Check if there is more than one present. If so, pluralize it
    if (num === 1){
        return noun;
    } else {
        return noun + 's';
    };
};

//Function to determine participles
const participleDetermine = (num, noun ,adjectives) =>{
    const numToWord = ['two','three','four','five'];
    const vowelArr = ['a','e','i','o','u'];
    //Checks if there's more than 1. If so that's easy, return a string of the matching number word
    if (num > 1){
        return numToWord[num-2];
    } 
    //If there's only one, first check if there are any adjectives
    else if (adjectives.length>0){
    //If there are, check if the first letter of the first adjective is a vowel, 
    //and return 'an' or 'a' respectively
        if (vowelArr.includes(adjectives[0][0])){
            return 'an';
        } else {
            return 'a';
        };
    } 
    //If there are no adjectives, do the same but check the noun's first letter instead
    else {
        if(vowelArr.includes(noun[0])){
            return 'an';
        } else {
            return 'a';
        };
    };
};

//Generate the Adjectives (if any) for each half
const firstAdjArray = adjectivesGenerator();
const secondAdjArray = adjectivesGenerator();

//Generate the nouns for both halves of the description
const firstNoun = nounGenerator(numFirst);
const secondNoun = nounGenerator(numSecond);

//Generate the verb
const verb = verbs[Math.floor(Math.random()*verbs.length)];

//Determine the first participle for each noun/adjective
const firstParticiple = participleDetermine(numFirst,firstNoun,firstAdjArray);
const secondParticiple = participleDetermine(numSecond,secondNoun,secondAdjArray);

//Combine the adjectives into a single string each, to insert into the sentence
//Initialize empty strings
let firstAdjectivesCombined = '';
let secondAdjectivesCombined = '';
//Add each adjective one at a time in order, with a space after each
firstAdjArray.forEach(elem =>{ firstAdjectivesCombined = firstAdjectivesCombined + elem + ' '});
secondAdjArray.forEach(elem =>{ secondAdjectivesCombined = secondAdjectivesCombined + elem + ' '});

//Now finally to create out artwork description!

const artDesc = `This artwork depicts ${firstParticiple} ${firstAdjectivesCombined}${firstNoun} ${verb} ${secondParticiple} ${secondAdjectivesCombined}${secondNoun}.`
console.log(artDesc);

//This artwork depicts [a/#][adjective(s)][nouns(s)] [verb-ing] [a/#][adjective(s)][nouns(s)]. 



