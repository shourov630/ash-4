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

