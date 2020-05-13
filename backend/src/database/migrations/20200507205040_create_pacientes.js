
exports.up = function (knex) {
    return knex.schema.createTable("pacientes", function (table) {
      table.string("id").primary();
      table.string("nome").notNullable();
      table.string("tipo_sanguineo").notNullable();
      table.string("medico");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("pacientes");
  };
