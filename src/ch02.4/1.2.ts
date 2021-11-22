const blackpink = {
  name: "BLACKPINK",
  debut: "2016-08-08",
  agency: "YG Entertainment",
  member: ["JISOO", "JENNIE", "ROSE", "LISA"],
};

type BLACKPINK = typeof blackpink;

const log = (blackpink: BLACKPINK) => {
  console.log(`${blackpink.name}`);
};

log(blackpink);

export {};
