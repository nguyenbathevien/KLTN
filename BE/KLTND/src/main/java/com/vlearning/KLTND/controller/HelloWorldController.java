package com.vlearning.KLTND.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloWorldController {

    @GetMapping("/")
    public String main() {
        return "Hello world";
    }

}
