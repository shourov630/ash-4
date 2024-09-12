// 1st problem part
function calculateTax( income , expenses ){
    if (income < expenses || income < 0 || expenses < 0){
        return "Invalid Input";
    }
    taxAmount = ( income - expenses ) *0.2;
    return taxAmount;
}
const amount = calculateTax ( 200000 , 30000 );
console.log(amount);



// 2nd problem part
function sendNotification(email) {
    const index = email.indexOf('@');
if (index === -1) {
    return "Invalid Email";
}

    const username = email.slice( 0, index );
    const domainName = email.slice( index + 1 );

    return username + " " + "sent you an email from" + " " + domainName; 
}
console.log(sendNotification("shourov.gmail.com"));



// 3rd problem part
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    
    for ( let i = 0; i < name.length; i++ ) {
        const char = name[i];
        if ( !isNaN(char) ) {
            return true;
        }
    }
    
    return false;
}
console.log(checkDigitsInName ("shourov630"));


// 4th problem part
const rajibInfo = {
  name: "Rajib",
  testScore: 50,
  schoolGrade: 20,
  isFFamily: false
};
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
      return "Invalid Input";
    }

    if (typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean') {
      return "Invalid Input";
    }
  
    if (obj.testScore > 50 || obj.schoolGrade > 30) {
      return "Invalid Input";
    }
  
    let finalScore = obj.testScore + obj.schoolGrade;
  
    if (obj.isFFamily) {
      finalScore += 20;
    }
  
    return finalScore >= 80;
  }
  console.log(calculateFinalScore(rajibInfo)); // Output: true



// 5th problem part
const interviewTimes = [13, 2, 6, 7, 10];
const serialNumber = 6;
function waitingTime(interviewTimes, serialNumber) {
  if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
    return "Invalid Input";
  }
  
  let sum =0;
  for(const time of interviewTimes){
      sum = sum + time;
  }
  const position = (serialNumber - 1) - interviewTimes.length;
  const count = interviewTimes.length;
  // console.log(sum,count);
  const average = sum / count;
  return (Math.round (average) * position );
}


console.log(waitingTime(interviewTimes, serialNumber));
