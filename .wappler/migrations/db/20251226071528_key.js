
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('settingId', 'settingKey');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('settingKey', 'settingId');
    })
};
