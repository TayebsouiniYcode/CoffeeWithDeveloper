package com.coffeewithdeveloper.coffeewithdeveloper.Controllers;

import com.coffeewithdeveloper.coffeewithdeveloper.DTOs.AuthRequestDTO;
import com.coffeewithdeveloper.coffeewithdeveloper.DTOs.JwtResponseDTO;
import com.coffeewithdeveloper.coffeewithdeveloper.DTOs.RegisterRequestDTO;
import com.coffeewithdeveloper.coffeewithdeveloper.Entities.User;
import com.coffeewithdeveloper.coffeewithdeveloper.Security.JwtService;
import com.coffeewithdeveloper.coffeewithdeveloper.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @Autowired
    UserService userService;


    @PostMapping("/auth/login")
    public JwtResponseDTO AuthenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO){
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(authRequestDTO.getEmail(),
                                authRequestDTO.getPassword()));

        if(authentication.isAuthenticated()){
            return JwtResponseDTO.builder()
                    .accessToken(jwtService.GenerateToken(authRequestDTO.getEmail())).build();
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }

    @PostMapping("/auth/register")
    public ResponseEntity< User > register(@RequestBody RegisterRequestDTO registerRequestDTO) throws Exception {
        return ResponseEntity.ok (userService.register (registerRequestDTO));
    }
}
