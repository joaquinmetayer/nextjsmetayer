// NOTAS DE ESTUDIO
// 
// en el componente que necesite que se renderice del lado del cliente, por ende usar "use client" abstraerlo lo maximo que pueda..
// ejemplo si es un boton, crear un componente de boton para llamarlo desde un padre, tengo que trabajar en dejar la menor cantidad de codigo SIN el "use client"
// le paso la funcion que va a llevar el boton por parametro ya que el boton debe ser reutilizable! no nos olvidemos de esto.. por eso la logica va a ir en el componente padre
// 
//
// si vamos a consumir una imagen externa (porque usamos el componente de imagen de next) debo aclararlo en el archivo config
// tambien podemos agregar el atributo prioridad para darle prioridad
//
// la metadata la podemos definir en un componente / funcion separada para asi cuando nos cambiemos de pagina ir a consultar la metadata y definir por ejemplo el title de esa pagina en espeficico
//
// agregar archivo error / loading
//
// los layouts los puedo usar para por ejemolo si quiero crear una pagina de contacto, meter todos los componentes que forman esa pagina en el layout (en vez de la page)
//
// cuando usar layout y cuando page en nextjs? sirven para envolver las rutas que sigan de ese componente layout
//
// rutas dinamicas para categorias por ej
//
// puedo crear componentes asincronos para que la solicitud se realice del lado del servidor
//
// crear una carpeta api en donde tendre todas la peticiones al backend, tipo context
//