<?php
    class User{

        // Connection
        private $conn;

        // Table
        private $db_table = "users";

        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // get a user
        public function getUserData(){
            $sqlQuery = "SELECT * FROM
                        ". $this->db_table ."
                    WHERE 
                       email = ? AND password = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->id = $dataRow['id'];
            $this->first_name = $dataRow['first_name'];
            $this->last_name = $dataRow['last_name'];
            $this->email = $dataRow['email'];
        }        
    }
?>