
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
        tbl.increments();
        //tbl.integer('post_id').references('id').inTable('posts')
        tbl.string('username', 30).notNullable().unique();
        tbl.string('email', 128).notNullable();
        tbl.string('password', 20).notNullable();
  })
    .createTable('posts', tbl => {
      tbl.increments();
      tbl.integer('user_id').references('id').inTable('users')
      tbl.string('caption', 128).notNullable();
      tbl.string('location', 128).notNullable();
    })
    .createTable('images', tbl => {
      tbl.increments();
      tbl.integer('posts_id').references('id').inTable('posts')
      tbl.string('image_name', 128).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('posts')
    .dropTableIfExists('images')
};
