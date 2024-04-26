let secureApi = (req, res, next) => {
  console.log("Secure Hoice");
  if (req.headers.authorization == "saminur1234") {
    next();
  } else {
    res.send({ error: "Inviled APi" });
  }
};

module.exports = secureApi;
