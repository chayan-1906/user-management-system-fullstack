package com.padmanabhasmac.usermanagementbackend.controllers;

import com.padmanabhasmac.usermanagementbackend.exceptions.UserNotFoundException;
import com.padmanabhasmac.usermanagementbackend.models.User;
import com.padmanabhasmac.usermanagementbackend.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
public class UserController {

    @Autowired
    private IUserRepository userRepository;

    @PostMapping("/user")
    User createNewUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user")
    User getUserById(@RequestParam Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
    }

    @PutMapping("/user")
    User updateUser(@RequestParam Long userId, @RequestBody User userToUpdate) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setUserName(userToUpdate.getUserName());
                    user.setName(userToUpdate.getName());
                    user.setEmail(userToUpdate.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(userId));
    }

    @DeleteMapping("/user")
    String deleteUser(@RequestParam Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new UserNotFoundException(userId);
        }
        userRepository.deleteById(userId);
        return "User with id " + userId + " has been deleted successfully!";
    }
}
