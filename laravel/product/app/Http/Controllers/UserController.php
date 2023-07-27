<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session; 
use Illuminate\Support\Facades\DB; 

class UserController extends Controller
{
    public function register(Request $request)
    {
        $user = new User;
        $user->email_address = $request->input("email");
        $user->password = $request->input("password");
        $user->confirm = $request->input("confirm_password");
        $user->save();

        $user = new User;
        $user->email = $user->email_address;
        $password = strtolower(strrev($user->email) . '' .strval($user->user_id));
        $user->password = Hash::make($password);
        $user->role = "user";
        $user->user_id = $user->user_id;
        $user->save();

        return redirect("/register")->with('success', 'user added!');
    }

    public function showRegister()
    {
        return view('register');
    }

    public function showProfile()
    {
        if (Session::has('user_id')){
            $s = user::query()
            ->select(DB::raw('*'))
            ->where("user_id", "=", Session::get("user_id"))
            ->get()
            ->first();
            return view('profile', compact('s'));
        }else{
            abort(401);
        }
    }

    public function logout()
    {
        if (Session::has('user_id')){
            Session::flush();
            // Session::pull('user_id');
        }

        return redirect('login')->with('success', 'You have logged out!');
    }

    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $user = User::where("email", "=", $request -> email) -> first();
        if ($user) {
            if (Hash::check($request -> password, $user -> password)) {
                $request->session()->put('user_id', $user->user_id);
                $request->session()->put('email', $user->email);
                $request->session()->put('user_id', $user->user_id);
                return redirect('/profile')->with('success', 'Welcome, ' . Session::get('email!') . '!');
            } else {
                return redirect('/login')->with('fail', 'Incorrect password');
            }
        } else {
            return redirect('/login')->with('fail', 'An account with that email does ot exist!');
        }
    }
}

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