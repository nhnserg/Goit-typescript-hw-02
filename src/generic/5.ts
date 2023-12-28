/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numericKeyValuePair: KeyValuePair<number, string> = {
  key: 1,
  value: "One",
};

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: "first",
  value: 1,
};

// Вивід у консоль
console.log(numericKeyValuePair);
console.log(stringKeyValuePair);
