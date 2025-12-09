<?php
// Database Type : "MySQL"
// Database Adapter : "mysql"
$exports = <<<'JSON'
{
    "name": "db",
    "module": "dbconnector",
    "action": "connect",
    "options": {
        "server": "mysql",
        "databaseType": "MySQL",
        "connectionString": "mysql:host=159.65.95.252;sslverify=false;port=3306;dbname=folp_members_dev;user=folpuser;password=%Joanne@01!;charset=utf8"
    }
}
JSON;
?>