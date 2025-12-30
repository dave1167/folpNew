
exports.up = function(knex) {
  return knex.schema
    .createTable('tbl_comms_status', async function (table) {
      table.increments('commId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tbl_comms_status')
};
