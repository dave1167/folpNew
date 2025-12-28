
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.string('fixedId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.dropColumn('fixedId');
    })
};
