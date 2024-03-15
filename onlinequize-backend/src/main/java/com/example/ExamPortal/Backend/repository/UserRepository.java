package com.example.ExamPortal.Backend.repository;

import com.example.ExamPortal.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String username);
    public User findByUsernameAndPassword(String username,String pass); 
}
