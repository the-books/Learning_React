const defaultPerson = {
  name: {
    first: '다니엘',
    last: '크레이그',
  },
  favActivity: '테니스',
};
function logActivity(p = defaultPerson) {
  console.log(`${p.name.first} likes ${p.favActivity}`);
}

export {};
