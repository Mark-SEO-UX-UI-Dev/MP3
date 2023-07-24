<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 

class AuthController extends Controller
{
    public function showSignupForm()
    {
        return view('signup');
    }

    public function processSignup(Request $request)
    {
        
        $request->validate([
            'email' => 'required|email|unique:users', 
            'password' => 'required|min:6|confirmed', 
        ]);

        $user = new User();
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password')); 
        $user->save();

        Auth::login($user);

        return redirect('/login')->with('success', 'You have successfully signed up! Please log in to continue.');
    }

}



