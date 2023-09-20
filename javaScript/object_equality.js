
const address1= new Address('a','b','c');
const address2= new Address('a','b','c');

function Address(street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));

function areEqual(address1,address2){
  return (address1.street===address2.street && 
         address1.city === address2.city &&
         address1.zipCode===address2.zipCode);
}

function areSame(address1,address2){
  const check= (address1===address2);   //comparing the references of the two objects
}