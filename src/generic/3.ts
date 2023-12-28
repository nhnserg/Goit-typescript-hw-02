/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Приклад використання
const result = merge({ name: "John" }, { age: 25 });
console.log(result);
