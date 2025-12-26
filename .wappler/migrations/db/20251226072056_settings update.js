
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.string('updatedBy');
      table.timestamp('updatedDate');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.dropColumn('updatedBy');
      table.dropColumn('updatedDate');
    })
};
