# akuntopia

akuntopia adalah aplikasi akuntansi berbasis web dibuat dengan framework laravel (BE) dan framework vuejs (FE)

## Tujuan

## Manfaat

## Fitur

## Cara Install

Aplikasi ini dapat diinstal pada server on-premise maupun online dengan spesifikasi sebagai berikut:

### Kebutuhan Server

1. PHP 8.1 (sesuai dengan [persyaratan server laravel 11.x](https://laravel.com/docs/11.x/development#server-requirements)).
2. Database MySQL atau MariaDB

### Langkah Instalasi

1. Clone repositori ini dengan perintah: `git clone https://github.com/akuntopia/akuntopia.git`
2. Masuk ke direktori akuntopia: `$ cd akuntopia`
3. Instal dependensi (BE) menggunakan: `$ composer install`
4. Salin berkas `.env.example` ke `.env`: `$ cp .env.example .env`
5. Generate kunci aplikasi: `$ php artisan key:generate`
6. Buat database MySQL untuk aplikasi ini.
7. Konfigurasi database dan pengaturan lainnya di berkas `.env`.
    ```
    APP_URL=http://localhost
    APP_TIMEZONE="Asia/Makassar"

    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret
    ```
8. Jalankan migrasi database: `$ php artisan migrate --seed`
9. Instal dependensi (FE) menggunakan: `npm install`
9. Mulai server (BE): `php artisan serve`
10. Mulai server (FE): `npm run dev`

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, kami sangat menghargainya. Berikut beberapa yang dapat Anda lakukan:

1. Laporkan [issue](https://github.com/akuntopia/akuntopia/issues) jika Anda menemui kesalahan atau bug.
2. Sampaikan [diskusi](https://github.com/akuntopia/akuntopia/discussions) jika Anda ingin mengusulkan fitur baru atau perubahan pada fitur yang sudah ada.
3. Ajukan [pull request](https://github.com/akuntopia/akuntopia/pulls) untuk perbaikan bug, penambahan fitur baru, atau perbaikan label.

## Kontak

Untuk Diskusi:

* [Grup Chat Telegram](https://t.me/akuntopia)
* [Usulan Fitur Baru](https://github.com/akuntopia/akuntopia/discussions)

Untuk pengumuman dan update:

<!-- * [Follow Twitter](https://twitter.com/akuntopia)
* [Like Facebook Page](https://facebook.com/akuntopia) -->
* [Telegram Channel](https://t.me/akuntopia)

## Lisensi

Proyek Buku Masjid merupakan perangkat lunak open-source yang dilisensikan di bawah [Lisensi MIT](LICENSE).
