# App Backend

## Descripción

Se propone la siguiente estructura para el proyecto.

## Estructura del Proyecto

- **src:** Este directorio contiene el código fuente de la aplicación.
  - **index.ts:** Punto de entrada de la aplicación que inicia el servidor Express.
  - **services:** Carpeta que alberga servicios lógicos o capas de negocio.
  - **routes:** Directorio que contiene los archivos de definición de rutas de la aplicación.
  - **helpers:** Carpeta destinada a funciones o utilidades de ayuda.
  - **middlewares:** Almacena los middlewares de Express.
  - **types.d.ts:** Archivo de definición de tipos TypeScript.

## Configuración

Se ha elegido TypeScript para proporcionar una tipificación robusta.

## Archivo .env.example

Se ha incluido un archivo `.env.example` para facilitar la configuración del entorno. Este archivo sirve como plantilla para las variables de entorno necesarias para el funcionamiento de la aplicación. Duplique este archivo y renómbrelo a `.env` para personalizar sus variables de entorno.

## Scripts en package.json

- **npm run dev:** Ejecuta la aplicación en modo de desarrollo utilizando `ts-node-dev`.
- **npm run lint:** Lintea el código utilizando `ts-standard`.
- **npm start:** Inicia la aplicación en modo de producción utilizando el código compilado.
- **npm run tsc:** Ejecuta el compilador TypeScript.
- **npm test:** Muestra un mensaje de error indicando que no hay pruebas especificadas.

## Dependencies

### Production

- **cors:** ^2.8.5 - Middleware para habilitar CORS en Express.
- **dotenv:** ^16.3.1 - Carga variables de entorno desde un archivo .env.
- **express:** 4.18.2 - Marco de aplicación web para Node.js.
- **express-async-handler:** ^1.2.0 - Utilidad para manejar fácilmente funciones asíncronas en Express.
- **mongoose:** ^7.5.3 - Biblioteca para modelar objetos MongoDB.

### Development

- **@types/cors:** ^2.8.14 - Tipos TypeScript para el middleware CORS.
- **@types/express:** ^4.17.18 - Tipos TypeScript para Express.
- **@types/jest:** ^29.5.5 - Tipos TypeScript para Jest.
- **@types/supertest:** ^2.0.14 - Tipos TypeScript para Supertest.
- **jest:** ^29.7.0 - Marco de pruebas para JavaScript y TypeScript.
- **supertest:** ^6.3.3 - Biblioteca para realizar pruebas de HTTP en Node.js.
- **ts-jest:** ^29.1.1 - Adaptador de TypeScript para Jest.
- **ts-node-dev:** ^2.0.0 - Herramienta de desarrollo para ejecutar aplicaciones TypeScript de forma automática.
- **ts-standard:** ^12.0.2 - Configuración de ESLint y estándar para TypeScript.
- **typescript:** ^5.2.2 - Lenguaje de programación que añade tipado estático a JavaScript.


## Pasos Siguientes

1. **Instalación de Dependencias:**
   Ejecuta `npm install` para instalar todas las dependencias necesarias.

2. **Compilación:**
   Utiliza `npm run build` para compilar el código TypeScript en JavaScript. El resultado se ubicará en un directorio `build`.

3. **Ejecución de la Aplicación:**
   Inicia la aplicación con `npm start` después de la compilación. El servidor se ejecutará en el puerto configurado en el archivo `.env`.

4. **Desarrollo Continuo:**
   Durante el desarrollo, puedes utilizar `npm run dev` para ejecutar la aplicación en modo desarrollo y tener un hot reload.

## Notas Adicionales

- El mi caso, estoy utilizando el gestor de paquetes `pnpm`, pero como este ultimo esta basado netamente en `npm`, no deberia existir problemas al momento de la intalacion.
