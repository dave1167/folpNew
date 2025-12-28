
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('settingJson', 'value');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('value', 'settingJson');
    })
};
