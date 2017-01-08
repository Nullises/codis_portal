module.exports = {
  tableName: 'service',
  meta: {schemaName: schemaService.schema},
  attributes:{
    _id:{
      columnName: 'service_id',
      type: 'integer',
      size: 11,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      columnName: 'name',
      type: 'string',
      maxLength: 50,
      required: true
    }
  }
};
