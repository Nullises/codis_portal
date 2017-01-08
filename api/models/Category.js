module.exports = {
  tableName: 'category',
  meta: {schemaName: schemaService.schema},
  attributes:{
    _id:{
      columnName: 'category_id',
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
