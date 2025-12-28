
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_section_type', async function (table) {
      table.increments('sctionTypeId');
    })
    .table('tbl_settings', async function (table) {
      table.integer('section').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.string('section', 100).alter();
    })
    .dropTable('tbl_section_type')
};
