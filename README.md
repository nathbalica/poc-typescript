# API de Filmes

Esta API foi criada para gerenciar um catálogo de filmes, incluindo operações CRUD (criar, ler, atualizar e excluir), bem como algumas funções de filtragem específicas.

## Estrutura do Projeto

O projeto é dividido em três camadas principais:

1. **Controller**: Esta camada lida com as solicitações HTTP e respostas. Ela valida os dados de entrada, chama os serviços apropriados e envia a resposta de volta ao cliente.
2. **Service**: Contém a lógica de negócios. Esta camada interage com o repositório para buscar ou salvar dados e pode lançar erros se algo não estiver certo.
3. **Repository**: É responsável por se comunicar com o banco de dados. Ele contém todas as consultas SQL e retorna os dados solicitados para a camada de serviço.

## Rotas da API

### Controller de Filtragem

1. **Contagem por Plataforma**
   - Método: `GET`
   - Rota: `/movies/count/platform`
   - Resposta: Retorna a contagem de filmes por plataforma.

2. **Contagem por Gênero**
   - Método: `GET`
   - Rota: `/movies/count/genre`
   - Resposta: Retorna a contagem de filmes por gênero.

3. **Listar por Gênero**
   - Método: `GET`
   - Rota: `/movies/genre/:genre`
   - Parâmetros: `genre` - Nome do gênero.
   - Resposta: Retorna uma lista de filmes para o gênero especificado.

### Controller de Filmes

1. **Criar Filme**
   - Método: `POST`
   - Rota: `/movies`
   - Corpo da Requisição: 
     ```json
     {
        "name": "Nome do Filme",
        "platform": "Plataforma",
        "genre": "Gênero",
        "status": "Status",
        "rating": 9.5,
        "summary": "Resumo do Filme"
     }
     ```
   - Resposta: Retorna o filme criado.

2. **Listar Filmes**
   - Método: `GET`
   - Rota: `/movies`
   - Resposta: Retorna uma lista de todos os filmes.

3. **Atualizar Filme**
   - Método: `PUT`
   - Rota: `/movies/:id`
   - Parâmetros: `id` - ID do filme.
   - Corpo da Requisição: Mesmo formato do "Criar Filme", mas com os campos que você deseja atualizar.
   - Resposta: Retorna o filme atualizado.

4. **Remover Filme**
   - Método: `DELETE`
   - Rota: `/movies/:id`
   - Parâmetros: `id` - ID do filme.
   - Resposta: Retorna um status 204 sem conteúdo após a exclusão bem-sucedida.

## Modelos e Repositórios

A aplicação utiliza tipos TypeScript para definir a estrutura de um filme (Movie) e as operações que podem ser realizadas em um repositório de filmes (MovieRepository).

```typescript
export type Movie = {
    ...
}

export type MovieRepository = {
    ...
}
```

## Validações

Os filmes são validados antes de serem criados ou atualizados:

- `name`, `platform`, e `genre` são campos obrigatórios.
- A `platform` deve estar entre as opções válidas (por exemplo: Netflix, Amazon Prime, etc.)
- O `genre` deve estar entre os gêneros válidos (por exemplo: Sci-Fi, Adventure, etc.)
- O `status` (se fornecido) deve estar entre os status válidos.

## Erros

Os erros são retornados no seguinte formato:

```json
{
   "message": "Mensagem de erro aqui"
}
```

Por exemplo, se um campo obrigatório estiver faltando na criação ou atualização de um filme, você receberá uma resposta como:

```json
{
   "message": "Nome, plataforma e gênero são campos obrigatórios."
}

```

## Considerações Finais
Garanta sempre que as solicitações à API contenham os dados corretos e estejam no formato esperado para evitar erros. Use as rotas de filtragem para obter insights específicos sobre os filmes no banco de dados.