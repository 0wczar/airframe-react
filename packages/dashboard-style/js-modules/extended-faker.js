var { faker } = require("@faker-js/faker");

function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
}

faker.person.initials = function () {
  var charCodes = {
    min: 65,
    max: 90,
  };

  function getRandomChar() {
    var offset = Math.random() * (charCodes.max - charCodes.min);
    var charCode = charCodes.min + Math.round(offset);

    return String.fromCharCode(charCode);
  }

  var firstChar = getRandomChar();
  var secondChar = getRandomChar();

  return firstChar + secondChar;
};

faker.date.day = function () {
  return pad(1 + Math.floor(Math.random() * 31), 2);
};

faker.date.monthDigit = function () {
  return pad(1 + Math.floor(Math.random() * 12), 2);
};

faker.date.time = function () {
  var hours = pad(1 + Math.floor(Math.random() * 12), 2),
    minutes = pad(1 + Math.floor(Math.random() * 60), 2);
  return hours + ":" + minutes;
};

faker.date.year = function () {
  return (2011 + Math.floor(Math.random() * 6)).toString();
};

faker.date.monthShort = function () {
  return faker.date.month().substr(0, 3);
};

faker.date.weekdayShort = function () {
  return faker.date.weekday().substr(0, 3);
};

faker.random.percentage = function () {
  return Math.ceil(Math.random() * 100) + "%";
};

faker.random.percentagePoint = function () {
  var percentage = 1 + Math.random() * 99;
  return percentage.toFixed(1) + "%";
};

module.exports = faker;
