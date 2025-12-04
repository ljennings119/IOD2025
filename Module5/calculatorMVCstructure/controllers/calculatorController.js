exports.add = (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) + Number(num2);
  res.json({ result });
};

exports.subtract = (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) - Number(num2);
  res.json({ result });
};

exports.multiply = (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) * Number(num2);
  res.json({ result });
};

exports.divide = (req, res) => {
  const { num1, num2 } = req.query;

  if (Number(num2) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  const result = Number(num1) / Number(num2);
  res.json({ result });
};
