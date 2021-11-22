const createCompliment = function(firstName: string, message: string) {
  return `${firstName}: ${message}`;
}

console.log(createCompliment('Tom', 'Nice job!'));

export {};
