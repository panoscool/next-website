import data from '../../../data.json';

export default (req, res) => {
  const id = req.query.id;
  const filtered = data.filter((p) => p.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Project with the id of ${id} is not found` });
  }
};
