
exports.up = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.datetime('expiryDateAccessCode');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_users', async function (table) {
      table.dropColumn('expiryDateAccessCode');
    })
};
