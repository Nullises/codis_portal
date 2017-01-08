module.exports = {
  tableName: 'user',
  meta: {schemaName: schemaService.schema},
  attributes:{
    _id:{
      columnName: 'user_id',
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
    },
    email:{
      columnName: 'email',
      type: 'string',
      maxLength: 50,
      required: true,
      email: true
    },
    org:{
      columnName: 'organization',
      type: 'string',
      maxLength: 50,
      required: false
    },
    phone:{
      columnName: 'telephone',
      type: 'string',
      maxLength: 50,
      required: false
    },
    cell:{
      columnName: 'cellphone',
      type: 'string',
      maxLength: 50,
      required: false
    }
  }
};
