ChatBot para atención al cliente de un local de sushi.
El mismo está asociado a una base de datos en MongoDB, en la que pueden incluirse productos.
El bot puede ser consultado por productos de manera libre.

#OBJETIVO
El objetivo es que el cliente pueda preguntarle al bot y que este le responda como lo haría un humano.
El cliente puede realizar preguntas con respecto a los productos, a los horarios del local, o iniciar un pedido. El bot debe interpretar lo que el usuario requiere, sin importar la manera en que este formule sus mensajes o si los mensajes tienen errores de ortografía.

#TO-DO
[x] Acoplar a BD
[x] Popular BD al iniciar
[x] Conectar a cuenta de OpenAI
[x] Prompt inicial
[x] Aceptar consultas básicas y traducirlas a acciones sobre BD
[x] Interpretar toma de pedidos
[ ] Crear pedidos sobre BD

#DEPENDENCIAS
mongodb, langchain, openai, dotenv, tsx

#INSTALACIÓN
<code>npm init</code>

#NOTA DE SEGURIDAD
Si bien se han tomado muchas de las precauciones necesarias para limitar al bot en sus acciones, esta aplicación es una implementación de una IA que toma acciones sobre una base de datos. Por lo tanto es conveniente considerar:
    1-definir los permisos adecuados para el usuario que realiza acciones sobre la base de datos
    2-utilizar supervisión humana para proyectos reales a gran escala (human-in-the-loop)