package com.padmanabhasmac.usermanagementbackend.repositories;

import com.padmanabhasmac.usermanagementbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}