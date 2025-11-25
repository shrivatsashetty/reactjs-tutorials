function setInputs(key, val) {
    // let key = "firstName";
    // let val = "Shrivatsa";
    return { [key]: val };
}

let newObj = setInputs("firstname", "Shrivatsa");
console.log(newObj);
