export default (req, res) => {
  const isLocal = process.env.NODE_ENV === "development";
  const currentUrl = `${req.headers.host}`;

  res.status(200).json({ isLocal, currentUrl });
};
