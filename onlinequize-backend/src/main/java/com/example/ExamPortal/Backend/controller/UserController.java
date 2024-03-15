package com.example.ExamPortal.Backend.controller;

import com.example.ExamPortal.Backend.model.User;
import com.example.ExamPortal.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping("/hi")
    public String getUser() {
        return "welcome";
    }

    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
    	System.out.println(">>>>>>>>>>>");

       // user.setPassword(user.getPassword());
//        Set<UserRole> roles = new HashSet<>();
//        Role role = new Role();
//        //When make user pur 33 and 34 line comment and uncomment 35,36 line
//      role.setRoleId(45L); 
//      role.setRoleName("normal");
////        role.setRoleId(46L);
////        role.setRoleName("admin");
//        UserRole userRole = new UserRole();
//        userRole.setUser(user);
//        userRole.setRole(role);
       // roles.add(userRole);
        return this.userService.createUser(user);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return userService.getUser(username);
    }

    @GetMapping("/getAll")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @PutMapping("/{id}")
    public User updateUser(@RequestBody User user, @PathVariable("id") Long id) {
        return userService.updateUser(user, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
    
    @PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		return this.userService.loginUser(user);
	}
}

