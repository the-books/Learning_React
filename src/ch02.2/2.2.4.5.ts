const blackPink = {
  member: ["JISOO", "JENNIE", "ROSE", "LISA"],
  print: function(delay = 1000) {
    setTimeout(() => {
      console.log(this.member.join(","));
    }, delay);
  },
};

blackPink.print();

export {};
