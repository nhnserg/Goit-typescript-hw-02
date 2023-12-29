let anything: any = -20;
anything = "Text";
anything = {};

// let anything: number | string | object = -20;
// anything = "Text";
// anything = {};

export {};

// В TypeScript краще уникати використання типу any, оскільки він втрачає переваги статичної перевірки типів, які TypeScript надає.  Тип any дозволяє вам використовувати значення будь-якого типу без будь-якої перевірки типів, і це може призвести до потенційних проблем з безпекою коду.
