package com.jestoque.jestoque.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // Diz ao Hibernate que esta classe é uma tabela
@Table(name = "tb_products") // Define o nome da tabela no banco
@Data // Gerencia Getters, Setters, equals, hashCode e toString via Lombok
@NoArgsConstructor // Cria um construtor vazio (obrigatório para o JPA)
@AllArgsConstructor // Cria um construtor com todos os campos
public class Product {

    @Id // Define que este campo é a Chave Primária
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremento (1, 2, 3...)
    private Long id;
    @Column(nullable = false, length = 100) // Campo obrigatório no banco
    private String name;
    private String description;
    private Double price;
    private Integer quantity;
}