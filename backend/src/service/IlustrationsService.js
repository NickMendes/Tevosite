const { Ilustrations } = require('../database/models');

const getAll = async () => Ilustrations.findAll();

const getByPk = async (id) => Ilustrations.findByPk(id);

const add = async ({ name, site, description }) => {
  return Ilustrations.create({ name, site, description });
};

const update = async (id, ilustration) => {
  await Ilustrations.update(ilustration, { where: { id } });
  return Ilustrations.findByPk(id);
};

const destroy = async (id) => Ilustrations.destroy({ where: { id } });

module.exports = { getAll, getByPk, add, update, destroy };
