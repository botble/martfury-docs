# Upgrade Guide

- [Upgrade to Martfury 1.16](#version_1_16)
- [Upgrade to Martfury 1.15](#version_1_15)
- [Upgrade to Martfury 1.14](#version_1_14)
- [Upgrade to Martfury 1.13](#version_1_13)
- [Upgrade to Martfury 1.12](#version_1_12)
- [Upgrade to Martfury 1.11](#version_1_11)
- [Upgrade to Martfury 1.10](#version_1_10)
- [Upgrade to Martfury 1.9](#version_1_9)
- [Upgrade to Martfury 1.8](#version_1_8)
- [Upgrade to Martfury 1.7](#version_1_7)
- [Upgrade to Martfury 1.6](#version_1_6)
- [Upgrade to Martfury 1.5](#version_1_5)
- [Upgrade to Martfury 1.4](#version_1_4)
- [Upgrade to Martfury 1.3](#version_1_3)
- [Upgrade to Martfury 1.2](#version_1_2)
- [Upgrade to Martfury 1.1](#version_1_1)

<a name="version_1_16"></a>
## Upgrade to version 1.16

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
  - Go to Admin -> Platform Administration -> Cache management then clear all caches.
  - Go to Admin -> Plugins: deactivate plugin `Blog`, `FAQ`, `Language`, `Language Advanced`, `Ecommerce` & `Marketplace` then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.

<a name="version_1_15"></a>
## Upgrade to version 1.15

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
  - Go to Admin -> Platform Administration -> Cache management then clear all caches.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` & `Marketplace` then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.

<a name="version_1_14"></a>
## Upgrade to version 1.14

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan cms:publish:assets`.
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `bootstrap`, `database`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce`, `Marketplace`, `Payment`, ` Language Advanced` then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.

>  {warning} Go to Admin -> Plugins and activate plugin Language & Language Advanced if you need multi-language support.
>  We have upgraded to the Bootstrap 5, it may have cache issue in browser, try to hard reload pages (Ctrl + F5 on Windows or CMD + Shift + R on MacOS).

<a name="version_1_13"></a>
## Upgrade to version 1.13

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan cms:publish:assets`.
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `bootstrap`, `database`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` & `Marketplace` then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.

<a name="version_1_12"></a>
## Upgrade to version 1.12

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan cms:publish:assets`.
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Run command `php artisan cms:plugin:activate marketplace` to activate plugin Marketplace if you need multi-vendor features.

- For non-developers:
  - Override folder `app`, `bootstrap`, `database`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate plugin Marketplace if you need multi-vendor features.  
  - 
<a name="version_1_11"></a>
## Upgrade to version 1.11

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Run command `php artisan cms:plugin:activate marketplace` to activate plugin Marketplace if you need multi-vendor features.

- For non-developers:
  - Override folder `app`, `bootstrap`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate plugin Marketplace if you need multi-vendor features.  
  
<a name="version_1_10"></a>
## Upgrade to version 1.10

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Run command `php artisan cms:plugin:activate marketplace` to activate plugin Marketplace if you need multi-vendor features.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate plugin Marketplace if you need multi-vendor features.  

<a name="version_1_9"></a>
## Upgrade to version 1.9

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_8"></a>
## Upgrade to version 1.8

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_7"></a>
## Upgrade to version 1.7

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_6"></a>
## Upgrade to version 1.6

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_5"></a>
## Upgrade to version 1.5

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins and activate the plugin SslCommerz Payment Gateway to use it.

<a name="version_1_4"></a>
## Upgrade to version 1.4

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_3"></a>
## Upgrade to version 1.3

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_2"></a>
## Upgrade to version 1.2
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
- Go to Admin -> Plugins and activate plugin Mollie if you want to use Mollie payment gateway.
