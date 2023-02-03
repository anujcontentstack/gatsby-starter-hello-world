export default function handler(req, res) {
  if (process.env.TEST_VARIABLE !== "TEST_VALUE") {
    throw new Error("env variable not present");
  }

  res
    .status(200)
    .json({
      key: "val"
    })
}
