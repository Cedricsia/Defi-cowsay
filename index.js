var cowsay = require("cowsay");

const information = require("./information");

console.log(
  cowsay.say({
    text: `Hello I'm ${information.name} from ${information.campus} campus`,
  })
);
