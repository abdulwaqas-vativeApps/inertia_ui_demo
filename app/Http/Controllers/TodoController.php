<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

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