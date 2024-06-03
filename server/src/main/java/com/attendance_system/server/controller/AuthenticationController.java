package com.attendance_system.server.controller;

import com.attendance_system.server.dto.AuthRequest;
import com.attendance_system.server.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    public JwtService jwtService;

    @GetMapping("/welcome")
    public String welcome(){
        return "welcome to the page";
    };

    @GetMapping("/home")
    public String Home(){
        return "This is a home page";
    };

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest){
            return jwtService.generateToken(authRequest.getUsername());
    }

}
