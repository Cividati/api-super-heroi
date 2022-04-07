[![CI](https://github.com/Cividati/api-super-heroi/actions/workflows/ci.yml/badge.svg)](https://github.com/Cividati/api-super-heroi/actions/workflows/ci.yml)

# Api Super Herio
Api feita em nodejs capaz de realizar um CRUD de super herois no banco de dados firebase

## Como começar
```bash
node server.js
```
## Rotas:

### /create

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |
|    strength   |       não       |   Float  |
|  intelligence |       não       |   Float  |
|    agillity   |       não       |   Float  |
|     origin    |       não       |  String  |

- ie: 
```
localhost:80/create?name=Superman&strength=10&intelligence=32&agillity=10&origin=Krypton
```

- Retorno:
```json
{
  "name": "Superman",
  "strength": "10",
  "intelligence": "32",
  "agillity": "10",
  "origin": "Krypton",
  "class_name": "hero"
}
```

### /read - NOT WORKING

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |

- ie:

```
localhost:80/read?name=Superman
```

- Retorno:
```json
{
  "name": "Superman",
  "strength": "undefined",
  "intelligence": "undefined",
  "agillity": "undefined",
  "origin": "undefined",
  "class_name": "hero"
}
```

### /update

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |
|    strength   |       não       |   Float  |
|  intelligence |       não       |   Float  |
|    agillity   |       não       |   Float  |
|     origin    |       não       |  String  |

- ie: 
```
localhost:80/update?name=Superman&strength=2
```

- Retorno:
```json
{
  "name": "Superman",
  "strength": "2",
  "intelligence": "undefined",
  "agillity": "undefined",
  "origin": "undefined",
  "class_name": "hero"
}
```

### /delete

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |

- ie:

```
localhost:80/read?name=Superman
```

- Retorno:
```json
{
  "name": "Superman",
  "status": "deleted"
}
```

## Autor:

- [Rubens Cividati](github.com/cividati)