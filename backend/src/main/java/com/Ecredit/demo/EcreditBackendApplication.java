package com.Ecredit.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class EcreditBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcreditBackendApplication.class, args);


	}
	@GetMapping("/")
	public String testServerResponse(){
		return "hello World";
	}
}
