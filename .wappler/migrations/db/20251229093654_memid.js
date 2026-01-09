
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.integer('memId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.dropColumn('memId');
    })
};
