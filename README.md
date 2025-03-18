# TechTop Project


### A következő technológiai stackekkel készült
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![MYSQL][MYSQL]][MYSQL-url]
  

## Project felépítése
```plaintext
├── app
|   ├── Http
|   |   ├── Controllers
|   |   |   └── Auth
|   |   ├── Middleware
|   |   └── Requests
|   ├── Models
|   └── Providers
├── bootstrap
├── config
├── database
|   ├── data
|   ├── factories
|   ├── migrations
|   ├── seeders
|   └── .gitignore
├── minta
├── public
├── resources
├── routes
├── storage
├── tests
├── .editorconfig
├── .gitattributes
├── .gitignore
├── README.md
├── artisan
├── composer.json
├── composer.lock
├── package-lock.json
├── package.json
├── phpunit.xml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
 ```

## Ez a projekt egy webáruházat és egy vezérlőpultot tartalmaz.

### Funckciók a webáruházban amit a felhasználó tud használni:
- Bejelentkezés
- Regisztráció
- Termékek szűrése
  - Árak szerint
  - Márkák szerint
- Termékek rendelése
- név változtatás
- jelszó változtatás
  
### Funckciók a vezérlőpulban amit az admin tud használni:

### A függőségek telepítéséhez nyisd meg a root mappát a terminálban, majd

NPM csomag Telepítése
```sh
npm install
```
Tailwind csomag telepítése
```sh
npm install -D tailwindcss postcss autoprefixer
```
Futtatás:
```sh
npm run dev
```
**Fontos hogy a Laravel HERD szerver is fusson közben**

---

# License
[![License][License]][License-url]

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[MYSQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com/
[License]: https://img.shields.io/badge/license-MIT-blue
[License-url]: https://opensource.org/license/mit
