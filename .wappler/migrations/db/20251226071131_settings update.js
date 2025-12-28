
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.string('settingId', 50).unique();
      table.json('settingJson');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.dropColumn('settingId');
      table.dropColumn('settingJson');
    })
};
