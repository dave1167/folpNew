
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('id', 'settingsId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('settingsId', 'id');
    })
};
