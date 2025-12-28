
exports.up = function(knex) {
  return knex.schema
    .table('tbl_section_type', async function (table) {
      table.renameColumn('sctionTypeId', 'sectionTypeId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('tbl_section_type', async function (table) {
      table.renameColumn('sectionTypeId', 'sctionTypeId');
    })
};
