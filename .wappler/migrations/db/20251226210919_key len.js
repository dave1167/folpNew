
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.null('value', 200).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.null('value', 4294967295).alter();
    })
};
