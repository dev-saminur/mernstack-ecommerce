let secureApi = (req, res, next) => {
  if (req.headers.authorization == "saminur1234") {
    next();
  } else {
    res.status(401);
    res.send({ error: "Inviled APi" });
  }
};

module.exports = secureApi;
