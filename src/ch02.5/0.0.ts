type Person = {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: "femail" | "mail";
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
};

type Res = {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: Person[];
};

export {
  Person,
  Res,
};
