<?php 

    class CRUD {
        public function __construct($dsn, $user, $password) {
            $this->dsn = $dsn;
            $this->user = $user;
            $this->password = $password;
            $this->db = null;
        }

        public function Connect() {
            $db = new PDO($this->dsn, $this->user, $this->password);
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->db = $db;
            return $db;
        }

        
        // Create
        public function addUser($username, $email, $password) {
            $sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)";

            $stmt = $this->db->prepare($sql);
            
            $stmt->bindParam(':username', $username);

            $stmt->bindParam(':email', $email);

            $stmt->bindParam(':password', $password);


            $stmt->execute();

            $result = $stmt->fetch();


            $userCreated = array(
                'username' => $username,
                'email' => $email,
                'password' => $password    
            );

            echo json_encode($userCreated);
        }



        // Read
        public function getAllUsers() {
            $sql = "SELECT * FROM users";

            $stmt = $this->db->prepare($sql);

            $stmt->execute();

            $result = $stmt->fetchAll();


            $usersList = array();
            
            foreach ($result as $row) { 
                array_push($usersList, (object)[
                    'id' => $row['id'],
                    'username' => $row['username'],
                    'email' => $row['email'],
                    'password' => $row['password']
            ]);
            }
            echo json_encode($usersList);
        }



        // Update
        public function updateUser($id, $data) {
            $sql = "UPDATE users SET username = :username, email = :email, password = :password WHERE id = :id";

            $stmt = $this->db->prepare($sql);


            $stmt->bindParam(':id', $id);
            
            $stmt->bindParam(':username', $data['username']);

            $stmt->bindParam(':email', $data['email']);

            $stmt->bindParam(':password', $data['password']);


            $stmt->execute();


            $result = $stmt->fetchAll();
            
            $userCreated = array(
                'id' => $id,
                'username' => $data['username'],
                'email' => $data['email'],
                'password' => $data['password']    
            );

            echo json_encode($userCreated);
        }

        // Delete
        public function deleteUser($id) {
            $sql = "DELETE FROM users WHERE id = :id";

            $stmt = $this->db->prepare($sql);


            $stmt->bindParam(':id', $id);

            $stmt->execute();

            $result = $stmt->fetch();

            echo json_encode($id);
        }

    }