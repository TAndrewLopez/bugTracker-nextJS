export default function handler({ query: { id } }, res) {
  const [filtered] = bugs.filter((article) => article.id === id);
  if (filtered.length) {
    res.status(200).json(filtered);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
