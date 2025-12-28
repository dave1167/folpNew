
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.string('value');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.dropColumn('value');
    })
};
