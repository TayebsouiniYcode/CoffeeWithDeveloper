package com.coffeewithdeveloper.coffeewithdeveloper.Services.Implementation;

import com.coffeewithdeveloper.coffeewithdeveloper.DTOs.RegisterRequestDTO;
import com.coffeewithdeveloper.coffeewithdeveloper.Entities.Role;
import com.coffeewithdeveloper.coffeewithdeveloper.Entities.User;
import com.coffeewithdeveloper.coffeewithdeveloper.Repositories.RoleRepository;
import com.coffeewithdeveloper.coffeewithdeveloper.Repositories.UserRepository;
import com.coffeewithdeveloper.coffeewithdeveloper.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.beans.Encoder;

@Component
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User register (RegisterRequestDTO registerRequestDTO ) throws Exception {
        User user = new User (  );
        if (registerRequestDTO.getFirstname () != null && !registerRequestDTO.getFirstname ().isEmpty ()) {
            if (registerRequestDTO.getLastname () != null && !registerRequestDTO.getLastname ().isEmpty ()) {
                if (registerRequestDTO.getEmail () != null && !registerRequestDTO.getEmail ().isEmpty ()) {
                    // TODO Test for optional email if exists or not
                    if ( registerRequestDTO.getPassword () != null
                            && !registerRequestDTO.getPassword ().isEmpty ()) {
                        try {
                            user.setFirstname ( registerRequestDTO.getFirstname () );
                            user.setLastname ( registerRequestDTO.getLastname () );
                            user.setEmail ( registerRequestDTO.getEmail () );
                            user.setPassword (passwordEncoder.encode(registerRequestDTO.getPassword()));
                            user.setPhone ( registerRequestDTO.getPhone () );

                            Role role = getRoleByName ( "ROLE_USER" );
                            user.setRoles(role);
                            return userRepository.save ( user );
                        } catch (Exception e) {
                            throw new Exception(e.getMessage());
                        }
                    } else {
                        throw new Exception("Password null or empty");
                    }
                } else {
                    throw new Exception("Email null or empty");
                }
            } else {
                throw new Exception("Lastname null or empty");
            }
        } else {
            throw new Exception("Firstname null or empty");
        }
    }


    @Override
    public Role getRoleByName ( String role_name ) {
        return this.roleRepository.getRoleByName ( role_name );
    }
}
