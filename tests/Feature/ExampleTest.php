<?php

use Inertia\Testing\AssertableInertia as Assert;

test('the home page renders the coming soon page', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('coming-soon'));
});

test('authentication routes are not registered', function (string $uri) {
    $this->get($uri)->assertNotFound();
})->with(['/login', '/register', '/dashboard', '/settings/profile']);
