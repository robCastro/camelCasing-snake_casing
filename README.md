# camelCasing to snake_casing

Small example to convert some json properties written in camelCase to snake_case, and then transform some properties.
Check the [npm package](https://www.npmjs.com/package/snakecase-keys) for more info.

# Instructions

1. Install the dependency

``` bash
npm install
```

2. Run the program
```
npm run start
```
3. Check the console for the output
```bash
> camelcase-to-snake_case@1.0.0 start
> node index.js

============Original data:============
{
  accounting: [
    { employeeID: 1, firstName: 'John', lastName: 'Doe', age: 23 },
    { employeeID: 2, firstName: 'Mary', lastName: 'Smith', age: 32 }
  ],
  sales: [
    { employeeID: 3, firstName: 'Sally', lastName: 'Green', age: 27 },
    { employeeID: 4, firstName: 'Jim', lastName: 'Galley', age: 41 }
  ]
}
~~~~~~~~~~~~Snake data:~~~~~~~~~~~~
{
  accounting: [
    { employee_id: 1, first_name: 'John', last_name: 'Doe', age: 23 },
    { employee_id: 2, first_name: 'Mary', last_name: 'Smith', age: 32 }
  ],
  sales: [
    {
      employee_id: 3,
      first_name: 'Sally',
      last_name: 'Green',
      age: 27
    },
    { employee_id: 4, first_name: 'Jim', last_name: 'Galley', age: 41 }
  ]
}


~~~~~~~~~~~~Spanish keys:~~~~~~~~~~~~
{
  accounting: [
    {
      employee_id: 1,
      primer_nombre: 'John',
      segundo_nombre: 'Doe',
      edad: 23
    },
    {
      employee_id: 2,
      primer_nombre: 'Mary',
      segundo_nombre: 'Smith',
      edad: 32
    }
  ],
  sales: [
    {
      employee_id: 3,
      primer_nombre: 'Sally',
      segundo_nombre: 'Green',
      edad: 27
    },
    {
      employee_id: 4,
      primer_nombre: 'Jim',
      segundo_nombre: 'Galley',
      edad: 41
    }
  ]
}
```

4. Check the `output.json` file for your new file.