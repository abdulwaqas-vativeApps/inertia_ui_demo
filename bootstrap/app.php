<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();


/*
bootstrap/app.php      → Laravel application ko initialize aur configure karta hai (routes, middleware, exceptions).

bootstrap/provider.php → Laravel ko service providers ka list deta hai jo app load hote hi register & boot honge.

bootstrap/chahe/       → Custom bootstrap scripts ya extra initialization tasks ke liye use hota hai (project-specific).
*/
