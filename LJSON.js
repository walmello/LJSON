// you can edit the token to any identifier you want 

const LJSON = {
    token: "/*js>"
}

LJSON.stringify = obj => JSON.stringify(obj, (key, value) => {
    if (typeof value === "function") {
        return LJSON.token + value.toString();
      }
    return value;
})

LJSON.parse = json => JSON.parse(json, function(key, value) {
    if (typeof value === "string" &&
        value.startsWith(LJSON.token)) {
      value = value.split(LJSON.token).join('')
      console.log()
      return (0, eval)(value)  
    }
    return value;
})
