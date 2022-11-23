export default function handler({ query: { id } }, res) {
  const [filtered] = [].filter((article) => article.id === id);
  if (filtered) {
    res.status(200).json(filtered);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
