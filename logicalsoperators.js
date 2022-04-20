console.log ('Logical operators');

// //   оператор ||
// // ex1
// if (1 || 0 )  {
//     console.log ('сработало')
// }


// // ex2
// const a = 0;

// const b = 1;
// const result1 = a|| b;
// console.log(typeof a, typeof b, a, b, typeof result1, result1 );

// // ex3
// const result2 = a || false || "value" || b;
// console.log(typeof a, typeof b, a, b, typeof result2, result2 );

// // ex4
// const result3 = false || "" || 0;
// console.log(typeof result3, result3 );


// оператор && 
// ex 1
// if (1 && 0 )  {
//     console.log (' не сработало');
// } else {
//     console.log (' сработало');

// }

// // ex2
// const a = 0;

// const b = 1;
// const result1 = a && b;
// console.log(typeof a, typeof b, a, b, typeof result1, result1 );

// // ex3
// const result2 = b && true && "value123";
// console.log(typeof b, typeof b, b, typeof result2, result2 );

// оператор not !
//  if (!1) {
//     //  
//     console.log('ok')
//  }
//  else {
//      console.log('not ok');
//  }


// Практика 


console.log('ex1= null || 0 || "" || undefined' );
console.log ('ex1=',(null || 0 || "" || undefined));

console.log('ex2= "яблоко" && true && null && 1' );
console.log ('ex2=',("яблоко" && true && null && 1));

console.log('ex3= 0 || true && "false" || null' );
console.log ('ex3=',(0 || true && "false" || null));

console.log('ex4= 0 && true || "false" || null' );
console.log ('ex4=',(0 && true || "false" || null));

console.log('ex5= !0 && !!1' );
console.log ('ex5=',(!0 && !!1));

console.log('ex1= !(null || !"апельсин" && true' );
console.log ('ex6=',(!(null || !"апельсин" && true)));


