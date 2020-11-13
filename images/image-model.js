const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('images');
}

function findById(id) {
  return db('images').where({ id: Number(id) });
}

function insert(image) {
  return db('images')
    .insert(post, 'id')
    .then(ids => ({ id: ids[0] }));
}

function update(id, image) {
  return db('images')
    .where('id', Number(id))
    .update(image);
}

function remove(id) {
  return db('images')
    .where('id', Number(id))
    .del();
}

