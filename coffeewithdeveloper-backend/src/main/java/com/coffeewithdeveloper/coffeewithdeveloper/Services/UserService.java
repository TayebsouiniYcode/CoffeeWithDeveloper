package com.coffeewithdeveloper.coffeewithdeveloper.Services;

import com.coffeewithdeveloper.coffeewithdeveloper.DTOs.RegisterRequestDTO;
import com.coffeewithdeveloper.coffeewithdeveloper.Entities.Role;
import com.coffeewithdeveloper.coffeewithdeveloper.Entities.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User register (RegisterRequestDTO registerRequestDTO) throws Exception;
    Role getRoleByName (String role_name );
}
