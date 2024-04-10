# CoffeeWithDeveloper

## API Reference

#### Register RestAPI

```http
  POST /auth/register
  Default ROLE => ROLE_USER
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**. |
| `lastname` | `string` | **Required**. |
| `email` | `string` | **Required**. |
| `phone` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Login

```http
  POST /auth/login
  Desponse : JWT
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |
