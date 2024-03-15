package com.example.ExamPortal.Backend.service;

import com.example.ExamPortal.Backend.helper.UserFoundException;
import com.example.ExamPortal.Backend.model.User;
import com.example.ExamPortal.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if (local != null) {
            System.out.println("User already exists");
            throw new UserFoundException();
        } else {
            local = this.userRepository.save(user);
        }
        return local;
    }



    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user,Long id) {
        Optional<User> data=userRepository.findById(id);
        User _user=data.get();
        _user.setUsername(user.getUsername());
        return userRepository.save(_user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    @Override
	public User loginUser(User user) {
    	System.out.println(user.getPassword() + ">>>>>>>"+ user.getUsername() );
		User loggedInUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		System.out.println(">>>>>"+ loggedInUser.getId());
		return loggedInUser;
	}

}
