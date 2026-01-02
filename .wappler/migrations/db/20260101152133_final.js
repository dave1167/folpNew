
exports.up = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.string('final_html');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_communications', async function (table) {
      table.dropColumn('final_html');
    })
};
