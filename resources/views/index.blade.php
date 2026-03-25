<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестовый запуск</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        .book-bg-body {
            background-color: #e3d0b5;
            color:  #785e3a;
            border: solid 1px #998466;
            box-shadow: inset 0px 0 30px 0px rgba(36, 10, 3, 0.5), -2px 0 5px 2px rgba(0, 0, 0, 0.4);
        }
    </style>
</head>
<body class="h-100 book-bg-body" style="">
    <div id="app">
        <div class="container-fluid">
            <!-- <v-header></v-header> -->
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>

<script src="{{ asset('js/manifest.js') }}"></script>
<script src="{{ asset('js/vendor.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>