---
url: 'https://zhaobc.site/notes/backend/java/code-snippets/dbunit.md'
---
# DBUnit 相关代码片段

## 根据不同连接创建不同的数据库连接

```java
private IDatabaseConnection createDatabaseConnection(Connection conn, String schema) {
  IDatabaseConnection dbUnitConn = new DatabaseConnection(conn, schema);
  DatabaseConfig config = dbUnitConn.getConfig();
  config.setProperty(DatabaseConfig.PROPERTY_ESCAPE_PATTERN, "\"?\"");
  config.setProperty(DatabaseConfig.FEATURE_ALLOW_EMPTY_FILEDS, true);

  String dbName = conn.getMetaData().getDatabaseProductName().toLowerCase();
  if (dbName.contains("oracle")) {
    // 注意这里没有使用 OracleDataTypeFactory, 而是自己的 MyOracleDataTypeFactory
    config.setProperty(DatabaseConfig.PROPERTY_DATETYPE_FACTORY, new MyOracleDataTypeFactory());
  } else if (dbName.contains("mysql")) {
    config.setProperty(DatabaseConfig.PROPERTY_DATETYPE_FACTORY, new MySqlDataTypeFactory());
    config.setProperty(DatabaseConfig.PROPERTY_METADATA_HANDLER, new MySqlMetadataHandler());
  }
}
```

## 自定义数据类型

如果想做特殊处理的话，自定义 `DataType`, 然后注册到 `DataTypeFactory`。

比如，对于 Oracle 数据库的 `CHAR` 类型，预期值跟实际值比较时，忽略空格后比较。
可以自定义 DataType 来实现。

### 自定义字符串数据类型

```java
public class StringDataTypeIgnoreSpaceDataType extends StringDataType {
  public StringDataTypeIgnoreSpaceDataType(String name, int sqlType) {
    super(name, sqlType);
  }

  @Override
  protected int compareNonNulls(Object value1, Object value2) throws TypeCastException {
    String val1 = (String) value1;
    String val2 = (String) value2;

    return val1.strip().compareTo(val2.strip());
  }
}
```

### 注册到数据类型工厂

```java

public class MyOracleDataTypeFactory extends OracleDataTypeFactory {

  // 第二个参数的 sqlType 跟原来的 sqlType 保持一致
  public static final DataType MY_CHAR = new StringDataTypeIgnoreSpaceDataType("CHAR", 1);
  public static final DataType MY_NCHAR = new StringDataTypeIgnoreSpaceDataType("NCHAR", -15);

  @Override
  public DataType createDataType(int sqlType, String sqlTypeName) throws DataTypeException {
    if ("CHAR".equals(sqlTypeName)) {
      return MY_CHAR;
    } else {
      return super.createDataType(sqlType, sqlTypeName);
    }
  }

}

```
