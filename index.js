//for loop
const cards=['Ada', 'Brendan', 'Ali'];
const birth='birthday';


writecards(cards,birth);

function writecards(array,keyword)  { 
  const messages=[];
  for ( let i=0; i< cards.length ; i++) 
    { messages.push (`Thank you, ${cards[i]}, for the wonderful ${keyword} gift!`);}
    return messages;}


//while loop
CountDown(10);
 
function CountDown(i) {
  let CountDownVar=i ;
  while (CountDownVar >=0) {
    console.log (CountDownVar);
    CountDownVar=CountDownVar-1;}
  return; }
