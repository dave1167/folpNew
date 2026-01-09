
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.string('draft_html');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.dropColumn('draft_html');
    })
};
