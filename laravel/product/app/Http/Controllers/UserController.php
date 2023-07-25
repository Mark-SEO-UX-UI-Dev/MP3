<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
public function index()
{
$users = User::all();
return view('users.index', compact('users'));
}

public function create()
{
return view('signup');
}

public function store(Request $request)
{
$request->validate([
'email' => 'required|email|unique:users',
'password' => 'required|min:6|confirmed',
]);

$user = new User();
$user->email = $request->input('email');
$user->password = bcrypt($request->input('password'));
$user->save();

return redirect('/')->with('success', 'You have successfully signed up! Please log in to continue.');
}

public function edit($id)
{
$user = User::find($id);
return view('users.edit', compact('user'));
}

public function update(Request $request, $id)
{
// Update user data
$user = User::find($id);
$user->email = $request->input('email');
$user->password = bcrypt($request->input('password'));
$user->save();

return redirect('/users')->with('success', 'User details updated successfully!');
}

public function destroy($id)
{
$user = User::find($id);
$user->delete();

return redirect('/users')->with('success', 'User deleted successfully!');
}
}