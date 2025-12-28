
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('settingKey', 'key');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('key', 'settingKey');
    })
};
