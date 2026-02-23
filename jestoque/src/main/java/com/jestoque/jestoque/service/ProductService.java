package com.jestoque.jestoque.service;

import com.jestoque.jestoque.model.Product;
import com.jestoque.jestoque.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service // Diz ao Spring que esta é a camada de regras de negócio
public class ProductService {
    private final ProductRepository productRepository;

    // Injeção de Dependência via Construtor
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Método para listar todos os produtos
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    // Método para salvar um produto 
    public Product save(Product product) {
        if (product.getSalePrice() == null || product.getSalePrice().compareTo(BigDecimal.ZERO) < 0) {
        throw new RuntimeException("O preço não pode ser negativo");
    }
    if (product.getCurrentStock() < 0) {
        throw new RuntimeException("O estoque inicial não pode ser negativo");
    }
        return productRepository.save(product);
    }
    public void delete(Long id) {
        productRepository.deleteById(id);
    }
}