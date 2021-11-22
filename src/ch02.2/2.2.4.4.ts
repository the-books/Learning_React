const blackPink = {
  member: ["JISOO", "JENNIE", "ROSE", "LISA"],
  print: function(delay = 1000) {
    const { member } = this;
    setTimeout(function() {
      console.log(member.join(","));
    }, delay);
  },
};

blackPink.print();

export {};
