package com.coffeewithdeveloper.coffeewithdeveloper.Repositories;

import com.coffeewithdeveloper.coffeewithdeveloper.Entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role getRoleByName(String name);
}
