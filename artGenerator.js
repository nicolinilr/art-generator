//Arrays containing strings to insert into the final art description
const singularNouns = ['cat','dog','bike','door','dragon','bank','advanced component','Javascript developer', 'chair', 'car', 'spaceship' ];
const adjectives = ['red', 'angry', 'loud','blue','large','small','excited','sheepish','giant','rowdy','bored','poor','steady'];
const verbs = ['petting','shooting','riding','spotting','driving','eating','obeying','fighting','arm wrestling','igniting','programming'];

//Determine how many objects should be in both halves of the description (bewtween 1-5)

const numFirst = Math.ceil(Math.random()*5);
const numSecond = Math.ceil(Math.random()*5);

//Generate the Adjectives (if any) for each half
const adjFirstArray = adjectivesGenerator();
const adjSecondArray = adjectivesGenerator();

//Generate the nouns for both halves of the description
const firstNoun = nounGenerator(numFirst);
const secondNoun = nounGenerator(numSecond);

//This artwork depicts [a/#][adjective(s)][nouns(s)] [verb-ing] [a/#][adjective(s)][nouns(s)]. 



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

const nounGenerator = (num) =>{
    //Select the noun in question
    let noun = singularNouns[Math.floor(Math.random()*singularNouns.length)];

    //Check if there is more than one present. If so, pluralize it
    if (num === 1){
        return noun;
    } else {
        return noun + 's';
    };
}