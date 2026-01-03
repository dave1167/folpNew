
exports.up = function(knex) {
  return knex.schema
    .table('tbl_comms_status', async function (table) {
      table.renameColumn('commDesc', 'commStatusDesc');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_comms_status', async function (table) {
      table.renameColumn('commStatusDesc', 'commDesc');
    })
};
