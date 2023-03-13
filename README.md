CLIMA
===========================

Esta aplicación web fue elaborada utilizando Laravel 8 con React mediante Laravel Mix. Su principal objetivo es permitir
a los usuarios consultar la humedad de las ciudades de Miami, Orlando y New York, así como también mostrar el historial
del clima de la ciudad seleccionada.

Requerimientos
--------------

Para poder utilizar esta aplicación, es necesario tener instalado en tu equipo lo siguiente:

* [Laravel 8](https://laravel.com/docs/8.x/installation)
* [Node.js 18](https://nodejs.org/es/)
* [npm](https://www.npmjs.com/)

Además, es necesario contar con una cuenta en [OpenWeatherMap](https://openweathermap.org/) para poder consumir su API y
obtener la información climática.

Instalación
-----------

1. Clona el repositorio a tu equipo:

   `git clone https://github.com/juansdev/clima.git`

2. Accede a la carpeta del proyecto:

   `cd clima`

3. Instala las dependencias de PHP:

   `composer install`

4. Copia el archivo `.env.example` y renómbralo a `.env`:

   `cp .env.example .env`

5. Genera una nueva clave de encriptación para Laravel:

   `php artisan key:generate`

6. Abre el archivo `.env` y configura las variables de entorno para la API de OpenWeatherMap:

   `MIX_OPENWEATHERMAP_API_KEY=TuApiKeyDeOpenWeatherMap`

7. Instala las dependencias de JavaScript:

   `npm install`

8. Compila los archivos JavaScript y CSS mediante Laravel Mix:

   `npm run dev`

9. Inicia el servidor de desarrollo:

   `php artisan serve`

Uso
---

Una vez que hayas seguido los pasos de instalación, podrás acceder a la aplicación en tu navegador web mediante la
siguiente URL:

`http://localhost:8000`

En la página principal, podrás encontrar un mapa con las ubicaciones de Miami, Orlando y New York, donde podrás cliquear
en los marcadores de sus ubicaciones y consultar su humedad. Al realizar una consulta, se mostrará la humedad de la
ciudad consultada en un globo de mensaje, y se mostrará el historial del clima de la ciudad en la columna izquierda.

La aplicación cuenta con un diseño responsive que se adapta a diferentes tamaños de pantalla, por lo que puedes
utilizarla desde cualquier dispositivo.
