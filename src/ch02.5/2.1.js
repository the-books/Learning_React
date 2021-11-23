const getFakePerson = async () => {
  try {
    const res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    const { results } = res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

getFakePerson();
