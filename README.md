<details> <summary>dwprc_join_ft</summary>

**Exemplo de Uso:**

```sql
EXEC dwprc_join_ft
	 @codigo_ftp_A = 'EspecProd'
	,@codigo_ftp_B = 'Ensaio'
	,@colunas_select_A = 'espec_codigo_componente, descricao_produto, revisao_produto, espec_tipo_produto, ordem_sequencia, oq_fz, cm_fz, pq_fz, caminho_imagem, espec_ensaio, espec_destrutivo_sn, espec_laboratorio, espec_uni_med, espec_min_max, espec_med_nom, espec_lim_inf, espec_lim_sup, espec_familia, espec_caracteristica'
	,@colunas_select_B = 'ensaio_nome, ensaio_descricao, ensaio_carta'
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
