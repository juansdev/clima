<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Clima</title>
</head>
<body class="body">
<div id="root"></div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
