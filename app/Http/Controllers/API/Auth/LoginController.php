<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;

use App\Http\Requests\Login;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    /**
     * Logs a user in.
     *
     * @param Request $request
     * @return void
     */
    public function login(Login $request)
    {
        $validated = $request->validated();

        $loginCredentials = [
            'email' => $validated['email'],
            'password' => $validated['password'],
        ];

        if (Auth::attempt($loginCredentials)) {
            $user = Auth::user();

            return response()->json([
                'user' => [
                    'api_token' => $user->api_token,
                    'username' => $user->username,
                ],
            ], Response::HTTP_OK);
        }

        return response()->json([
            'message' => 'Credentials invalid.',
        ], Response::HTTP_UNAUTHORIZED);
    }
}
