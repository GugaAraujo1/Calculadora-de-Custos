<details> <summary>dwprc_join_ft</summary>

**Exemplo de Uso:**

```sql
EXEC dwprc_join_ft
	 @codigo_ftp_A = 'EspecProd'
	,@codigo_ftp_B = 'Ensaio'
	,@colunas_select_A = 'espec_codigo_componente, descricao_produto, espec_ensaio'
	,@colunas_select_B = 'ensaio_nome, ensaio_descricao'
	,@coluna_join_A = 'espec_ensaio'
	,@coluna_join_B = 'ensaio_nome'
	,@tipo_join = 'LEFT'
-- Faz um LEFT JOIN dos resultados encontrados na ft com código 'EspecProd' com os resultados encontrados na ft com código 'Ensaio'.
```

**Parâmetros:**
| Parâmetro | Tipo | Descrição | Opcional |
|-----------|------|-----------|----------|
| `@codigo_ft_A` | `VARCHAR(100)` | Código da ft A | Não |
| `@codigo_ft_B` | `VARCHAR(100)` | Código da ft B | Não |
| `@colunas_select_A` | `VARCHAR(MAX)` | Colunas que serão selecionadas da ft A | Não |
| `@colunas_select_B` | `VARCHAR(MAX)` | Colunas que serão selecionadas da ft B | Não |
| `@coluna_join_A` | `VARCHAR(100)` | Coluna comum da ft A | Não |
| `@coluna_join_B` | `VARCHAR(100)` | Coluna comum da ft B | Não |
| `@tipo_join` | `VARCHAR(10)` | Tipo de JOIN que será usado (LEFT, RIGHT ou INNER). Inicialmente configurado como LEFT JOIN| Sim |

**Retorno:**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `erro_num` | INT | Código de erro (0 indica sucesso). |
| `erro_desc` | VARCHAR(MAX) | Descrição do erro (vazia em caso de sucesso). |

O retorno dessa procedure dependerá dos valores estabelecidos nos parâmetros `@colunas_select_A`, `@colunas_select_B`, e `@tipo_join`



</details> 
