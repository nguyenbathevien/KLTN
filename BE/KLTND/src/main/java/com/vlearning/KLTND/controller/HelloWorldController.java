package com.vlearning.KLTND.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloWorldController {

    @GetMapping("/")
    public String main(@RequestParam String param) {
        return "Hello world";
    }

}
