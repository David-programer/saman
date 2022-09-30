# DATA TABLE COMPONENT

## ACCEDER A UN ARRAY DESDE LAS KEYS
- Se puede imprimir un array bidemensional en el parametro keys --> keys=['llave', ['llave', 'llave_secundaria']]

## IMPRIMIR UN INPUT
- Se puede imprimir un put, pasando en el parametro "information", en cada registro una llave con nombre 'input'
- data = [{'nombre': 'value', input: {}}]
- El valor se retorna en el evento (onMethod) con todas las propiedades


### PARAMETROS 

- value --> valor del input
- type --> tipo del input
- id --> id del input 
- name --> name del input

### CONFIGURACION DATATABLE
- id --> obligatorio: identifica la tabla para evitar problemas de referencia

### AUTOR: Cristian David Velásquez 