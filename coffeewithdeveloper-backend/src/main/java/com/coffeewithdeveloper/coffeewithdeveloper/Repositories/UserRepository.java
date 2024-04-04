package com.coffeewithdeveloper.coffeewithdeveloper.Repositories;

import com.coffeewithdeveloper.coffeewithdeveloper.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);
}
