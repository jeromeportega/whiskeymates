<?php

namespace Tests\Acceptance;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use App\User;
use Illuminate\Http\Response;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateUser()
    {
        $user = factory(User::class)->make();

        $response = $this->json('POST', '/api/v1/user/create', [
            'name' => $user->name,
            'username' => $user->username,
            'email' => $user->email,
            'password' => $user->password,
        ]);

        $response->assertStatus(Response::HTTP_OK);
        $response->assertJsonStructure([
            'created',
            'api_token',
        ]);
    }
}
