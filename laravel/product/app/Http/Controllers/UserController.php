<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;




class UserController extends Controller
{
    public function index()
    {
    //    List of users
    }

    public function create()
    {
        @include("layouts/signup");
        return view('signup');
    }

    public function store(Request $request)
    {
    //    for sign up process
    }

    public function edit($id)
    {
        // for form edit
    }

    public function update(Request $request, $id)
    {
        // User info update
    }
}

