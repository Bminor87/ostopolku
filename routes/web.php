<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'kansi')->name('home');
Route::inertia('yritys', 'yritys')->name('yritys');
Route::inertia('segmentointi', 'segmentointi')->name('segmentointi');
Route::inertia('asiakaspersoona', 'asiakaspersoona')->name('asiakaspersoona');
Route::inertia('ostopolku', 'ostopolku')->name('ostopolku');
Route::inertia('reflektointi', 'reflektointi')->name('reflektointi');
Route::inertia('tekoaly', 'tekoaly')->name('tekoaly');
Route::inertia('lahteet', 'lahteet')->name('lahteet');
