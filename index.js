//for loop



function writeCards(array, keyword) {
const messages = [];
  for (let i = 0; i < array.length; i++) {
    messages.push (`Thank you, ${array[i]}, for the wonderful ${keyword} gift!`);
  }
  return messages;
}


//while loop

 
function CountDown(i) {
  let CountDown=i ;
  while (CountDown >=0) {
    console.log (CountDown);
    CountDown=CountDown-1;}
  return; }
