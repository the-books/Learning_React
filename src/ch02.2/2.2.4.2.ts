const lordify = (firstName: string, land: string) => {

  if (!firstName) {
    throw new Error('Non firstName');
  }

  if (!land) {
    throw new Error('Non land');
  }

  return `${land}의 ${firstName}`;
}

// console.log(lordify('Sue'));

export {};
