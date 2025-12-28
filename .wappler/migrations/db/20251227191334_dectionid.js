
exports.up = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('section', 'sectionId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_settings', async function (table) {
      table.renameColumn('sectionId', 'section');
    })
};
