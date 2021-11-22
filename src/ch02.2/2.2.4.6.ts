import { member } from "../ch02.4/1.0";

const blackPink = {
  member: ["JISOO", "JENNIE", "ROSE", "LISA"],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(member.join(","));
    }, delay);
  },
};

blackPink.print();

export {};
