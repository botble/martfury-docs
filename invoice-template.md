## Custom invoice template

- Option 1: Customize directly file `platform/plugins/ecommerce/resources/views/invoices/template.blade.php`.

- Option 2: Copy file `platform/plugins/ecommerce/resources/views/invoices/template.blade.php` to `storage/app/invoices/template.blade.php` to start customize.

## Bangladesh font

To display Bangladesh text in invoice, need to use font **FreeSerif**.

- Download `FreeSerif.tff` font from https://github.com/byrongibson/fonts/blob/master/backup/truetype.original/freefont/FreeSerif.ttf.
- Upload `FreeSerif.tff` to folder `/public`.
- Copy file `platform/plugins/ecommerce/resources/views/invoices/template.blade.php` to `storage/app/invoices/template.blade.php` to start customize.
- Change in CSS:
```CSS
  @font-face {
    font-family: FreeSerif;
    src: url('{{ url('FreeSerif.ttf') }}');
  }
  
  body {
      font-size: 15px;
      font-family: FreeSerif, Arial, sans-serif !important;
  }
```

Screenshot: 
![Image](https://live.staticflickr.com/65535/51915032123_81575aa62e_b.jpg)

## Japanese font

- Option 1: Select font `M Plus Rounded 1c` for invoice font in Admin -> Ecommerce -> Settings.
  ![Image](https://live.staticflickr.com/65535/51913973982_998c9492c5_b.jpg)

- Option 2: Customize invoice template like this:
```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">

    <style>

        body {
            font-size: 15px;
            font-family: 'M PLUS Rounded 1c', 'DejaVu Sans', Arial, sans-serif !important;
        }

        ...

        .bold, strong {
            font-weight : normal;
        }

        ...

        .total {
            color       : #fb7578;
            font-weight : normal
        }

        ...
    </style>
```

Screenshot:
![Image](https://live.staticflickr.com/65535/51915262029_50ae25c9e0_b.jpg)