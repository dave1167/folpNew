
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.text('draft_html').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.string('draft_html', 255).alter();
    })
};
