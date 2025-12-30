
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.text('html');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.dropColumn('html');
    })
};
