//for loop
const cards=['Ada', 'Brendan', 'Ali'];
const birth='birthday';




function writecards(cards,event)  {
  for ( let i=0; i< cards.length ; i++) 
    { console.log (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);}
    return ;}


//while loop
function CountDown(i) {
  let CountDownVar=i ;
  while (CountDownVar >=0) {
    console.log (CountDownVar);
    CountDownVar=CountDownVar-1;}
  return; }
