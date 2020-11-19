import DB from '@database/db';

const allAvos = async (req, res) => {
  const db = new DB();
  const avos = await db.getAll();
  res.status(200).json(avos);
};

export default allAvos;
