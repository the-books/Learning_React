const blackpink = {
  name: "BLACKPINK",
  debut: "2016-08-08",
  agency: "YG Entertainment",
  member: ["JISOO", "JENNIE", "ROSE", "LISA"],
  label: {
    KOR: "YG Entertainment",
    USA: "Universal Music Group",
    JAP: "Universal Music Japan",
  },
};

type BLACKPINK = typeof blackpink;

const log = ({ label: { USA } }: BLACKPINK) => {
  console.log(`${USA}`);
};

log(blackpink);

export {};
