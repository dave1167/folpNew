
exports.up = function(knex) {
  return knex.schema
    .table('tbl_section_type', async function (table) {
      table.string('sectionDesc');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_section_type', async function (table) {
      table.dropColumn('sectionDesc');
    })
};
