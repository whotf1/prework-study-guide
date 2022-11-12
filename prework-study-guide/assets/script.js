var topics = ["HTML","CSS","Git","JavaScript"];
var RndTopic = topics[Math.floor(Math.random()*topics.length)];

function ListTopics(){
    for(var x=0; x<topics.length; x++){
        console.log(topics[x]);
    }
}


function SelectTopic(){
    if (RndTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (RndTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (RndTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (RndTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log("Topics learned through Prework: ");
ListTopics();
console.log("which topic should we learn first");
SelectTopic();



