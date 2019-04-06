class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    // define array of exception words
    // split string into array of words
    // iterate and .capitalize first word
    // .capitalize any words not in the exceptions array
    let strArr = string.split(" ");
    let noCap = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let newArr = [];

    strArr.forEach((word, index) => {
      if (index == 0) {
        newArr.push(this.capitalize(word));
      } else if (noCap.includes(word)) {
        newArr.push(word);
      } else {
        newArr.push(this.capitalize(word));
      }
    });
    return newArr.join(" ");
  }
}
