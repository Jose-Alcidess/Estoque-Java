package com.jestoque.jestoque.controller;

import com.jestoque.jestoque.model.Product;
import com.jestoque.jestoque.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Define que esta classe é uma API REST
@RequestMapping("/api/products") // Define a rota base: http://localhost:8080/api/products
@CrossOrigin(origins = "http://localhost:4200") // Permite que o Angular (ou outros) acesse a API
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping // Responde a requisições GET
    public List<Product> getAll() {
        return productService.findAll();
    }

    @PostMapping // Responde a requisições POST
    public Product create(@RequestBody Product product) {
        return productService.save(product);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.delete(id); // Use o nome da variável do seu service
}
}