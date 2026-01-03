
exports.up = function(knex) {
  return knex.schema
    .table('tbl_comms_status', async function (table) {
      table.renameColumn('commId', 'commStatusId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_comms_status', async function (table) {
      table.renameColumn('commStatusId', 'commId');
    })
};
