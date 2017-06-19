console.group('OR');
console.log('true || true = ', true || true);     // True
console.log('true || false = ', true || false);   // True
console.log('false || true = ', false || true);   // True
console.log('false || false = ', false || false); // False
console.groupEnd();

console.group('AND');
console.log('true && true = ', true && true);     // True
console.log('true && false = ', true && false);   // False
console.log('false && true = ', false && true);   // False
console.log('false && false = ', false && false); // False
console.groupEnd();

console.group('NOR');
console.log('!(true || true) = ', !(true || true));     // False
console.log('!(true || false = ', !(true || false));    // False
console.log('!(false || true) = ', !(false || true));   // False
console.log('!(false || false) = ', !(false || false)); // True
console.groupEnd();

console.group('NAND');
console.log('!(true && true) = ', !(true && true));     // False
console.log('!(true && false) = ', !(true && false));   // True
console.log('!(false && true) = ', !(false && true));   // True
console.log('!(false && false) = ', !(false && false)); // True
console.groupEnd();

console.group('XOR');
console.log('true ^ true = ', true ^ true);     // False
console.log('true ^ false = ', true ^ false);   // True
console.log('false ^ true = ', false ^ true);   // True
console.log('false ^ false = ', false ^ false); // False
console.groupEnd();

console.group('XNOR');
console.log('true ^ true = ', !(true ^ true));     // True
console.log('true ^ false = ', !(true ^ false));   // False
console.log('false ^ true = ', !(false ^ true));   // False
console.log('false ^ false = ', !(false ^ false)); // True
console.groupEnd();
