const IluService = require('../service/IlustrationsService');

const getAll = async (_req, res) => {
  try {
    const result = await IluService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getByPK = async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await IluService.getById(id);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  try {
    const result = await IluService.add(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await IluService.update(id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  
  try {
    await IluService.destroy(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getByPK, add, update, destroy };
