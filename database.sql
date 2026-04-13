CREATE DATABASE IF NOT EXISTS taskmanager;
USE taskmanager;

CREATE TABLE IF NOT EXISTS tasks (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(255)                  NOT NULL,
    priority    ENUM('Low', 'Medium', 'High') NOT NULL DEFAULT 'Low',
    isCompleted TINYINT(1)                    NOT NULL DEFAULT 0,
    created_at  TIMESTAMP                     DEFAULT CURRENT_TIMESTAMP
);
