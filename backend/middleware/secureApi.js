let secureApi = (req, res, next) => {
  if (req.headers.authorization == "saminur1234") {
    next();
  } else {
    res.send({ error: "Inviled APi" });
  }
};

module.exports = secureApi;
