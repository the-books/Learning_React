const template = "hh:mm:ss tt";
const clocktime = template.replace("hh", "03")
  .replace("mm", "33")
  .replace("ss", "33")
  .replace("tt", "PM");

console.log(clocktime);

export {};
