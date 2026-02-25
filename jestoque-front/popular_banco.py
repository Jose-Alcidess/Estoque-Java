import requests

url = 'http://localhost:8080/api/products'
headers = {'Content-Type': 'application/json'}

produtos = [
  { "name": "Livro: Python para Análise de Dados", "sku": "LIV-PY-001", "salePrice": 35.50, "currentStock": 15, "minStock": 5 },
  { "name": "Licença Software Anki Pro", "sku": "SOFT-ANKI-01", "salePrice": 25.00, "currentStock": 99, "minStock": 10 },
  { "name": "Palhetas Limpa-Vidros Sandero Expression 1.0", "sku": "AUTO-SAN-001", "salePrice": 18.90, "currentStock": 8, "minStock": 4 },
  { "name": "Teclado Mecânico Ergonómico", "sku": "TEC-ERG-002", "salePrice": 120.00, "currentStock": 22, "minStock": 10 },
  { "name": "Livro: Raciocínio Lógico para Concursos", "sku": "LIV-CONC-003", "salePrice": 28.00, "currentStock": 40, "minStock": 15 },
  { "name": "Auscultadores com Cancelamento de Ruído", "sku": "AUDIO-ANC-01", "salePrice": 250.00, "currentStock": 5, "minStock": 3 },
  { "name": "Mouse Sem Fios de Precisão", "sku": "RAT-SF-004", "salePrice": 45.00, "currentStock": 30, "minStock": 10 },
  { "name": "Suporte de Portátil em Alumínio", "sku": "SUP-PORT-01", "salePrice": 32.00, "currentStock": 50, "minStock": 20 },
  { "name": "Curso em Vídeo: Desenvolvedor Node.js e React", "sku": "CUR-DEV-001", "salePrice": 85.00, "currentStock": 100, "minStock": 10 },
  { "name": "Monitor Ultrawide 34 Polegadas", "sku": "MON-UW-34", "salePrice": 450.00, "currentStock": 3, "minStock": 2 }
]

print("Iniciando o cadastro em lote...")

for p in produtos:
    resposta = requests.post(url, json=p, headers=headers)
    if resposta.status_code in [200, 201]:
        print(f"[OK] Sucesso: {p['name']}")
    else:
        print(f"[ERRO] Falha ao cadastrar {p['name']}: {resposta.status_code}")

print("Finalizado!")