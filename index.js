//for loop



function writeCards(array, event) {
const messages = [];
  for (let i = 0; i < array.length; i++) {
    messages.push(Thank you, ${array[i]}, for the wonderful ${keyword} gift!);
  }
  return messages;
}


//while loop

 
function CountDown(i) {
  let CountDownVar=i ;
  while (CountDownVar >=0) {
    console.log (CountDownVar);
    CountDownVar=CountDownVar-1;}
  return; }
