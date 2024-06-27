package com.attendance_system.server.controller;

import com.attendance_system.server.dto.AuthRequest;
import com.attendance_system.server.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    public JwtService jwtService;

    @Autowired
    public AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome(){
        return "welcome to the page for docker new himosh";
    }

    @GetMapping("/welcome-new")
    public String welcomeNew(){
        return "welcome to the new welcome page";
    }

    @GetMapping("/home")
    public String Home(){
        return "This is a home page";
    }

    @PostMapping("authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

}
