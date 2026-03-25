<?php

// namespace = folder
namespace App\Http\Controllers; // tells file directory/location, to locate class

// use = import

use App\Models\Todo; // todo Model to communicante db
use Illuminate\Http\Request; // for handle user request data
use Inertia\Inertia; // for laravel react connect


// extends means => TodoController class extends to Controller(base/parent) class, so that it can get Controller class feature

class TodoController extends Controller
{
    public function index()
    {
        return Inertia::render('todos/Index', [
            'todos' => Todo::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required'
        ]);

        Todo::create([
            'title' => $request->title
        ]);

        return redirect()->back();
    }

    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate([
            'title' => 'nullable|string',
            'completed' => 'nullable|boolean',
        ]);

        $todo->update([
            'title' => $data['title'] ?? $todo->title,
            'completed' => $data['completed'] ?? $todo->completed,
        ]);

        return redirect('/todos', 303);
    }
    public function destroy(Todo $todo)
    {
        $todo->delete();

        return redirect('/todos', 303);
    }
}

/*
Todo (class) :: = poori table, class level
$todo (object) -> = ek row, object level


| Part    | Meaning                  |
| ------- | ------------------------ |
| `Todo`  | model (DB table)         |
| `$todo` | variable (single record) |



| Part       | Meaning              |
| ---------- | -------------------- |
| `Request`  | type (Laravel class) |
| `$request` | variable (user data) |

*/
