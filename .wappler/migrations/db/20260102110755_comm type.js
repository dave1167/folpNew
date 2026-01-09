
exports.up = function(knex) {
  return knex.schema
    .table('tbl_comms_type', async function (table) {
      table.renameColumn('commDesc', 'commTypeDesc');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_comms_type', async function (table) {
      table.renameColumn('commTypeDesc', 'commDesc');
    })
};
