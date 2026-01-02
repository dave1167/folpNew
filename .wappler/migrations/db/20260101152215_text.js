
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.text('final_html').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.string('final_html', 255).alter();
    })
};
