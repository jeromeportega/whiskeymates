<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Register;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\User;

class UserController extends Controller
{

    /**
     * Returns the currently logged in user.
     *
     * @param Request $request
     * @return void
     */
    public function get(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ], Response::HTTP_OK);
    }

    /**
     * Creates a new user.
     *
     * @param Register $request
     * @return void
     */
    public function create(Register $request)
    {
        $validated = $request->validated();

        $user = User::forceCreate([
            'name' => $validated['name'],
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'api_token' => Str::random(80),
        ]);

        return response()->json([
            'user' => [
                'api_token' => $user->api_token,
                'username' => $user->username,
            ],
            'message' => 'User created!',
        ], Response::HTTP_OK);
    }
}
