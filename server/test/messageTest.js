const cryto = require("crypto");

function createSalt() {
  return new Promise((resolve, reject) => {
    cryto.randomBytes(64, (err, buf) => {
      if (err) throw err;
      const result = buf.toString("base64");
      console.log(result, result.length);
    });
  });
}

createSalt();
