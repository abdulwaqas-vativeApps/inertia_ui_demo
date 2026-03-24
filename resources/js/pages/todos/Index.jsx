import React, { useState } from "react";
import { useForm, router } from "@inertiajs/react";
import Button from "../../components/ui/Button";

export default function Todos({ todos }) {
    const { data, setData, post, reset } = useForm({
        title: "",
    });

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/todos", {
            onSuccess: () => reset(),
        });
    };

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.title);
    };

    const updateTodo = (id) => {
        router.put(
            `/todos/${id}`,
            { title: editText },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setEditingId(null);
                    setEditText("");
                },
            }
        );
    };

    return (
        <div className="p-5">
            <h1 className="text-xl font-bold mb-4">Todo App</h1>

            {/* Create */}
            <form onSubmit={submit} className="flex gap-2 mb-5">
                <input
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="border p-2"
                    placeholder="Enter todo"
                />
                <Button type="submit">Add</Button>
            </form>

            {/* List */}
            {todos.map((todo) => (
                <div key={todo.id} className="flex gap-3 items-center mb-2">

                    {/* Checkbox */}
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() =>
                            router.put(`/todos/${todo.id}`, {
                                completed: !todo.completed,
                            })
                        }
                    />

                    {/* Title OR Edit Input */}
                    {editingId === todo.id ? (
                        <input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="border p-1"
                        />
                    ) : (
                        <span className={todo.completed ? "line-through" : ""}>
                            {todo.title}
                        </span>
                    )}

                    {/* Buttons */}
                    {editingId === todo.id ? (
                        <Button onClick={() => updateTodo(todo.id)}>
                            Save
                        </Button>
                    ) : (
                        <Button onClick={() => startEdit(todo)}>
                            Edit
                        </Button>
                    )}

                    <Button
                        variant="destructive"
                        onClick={() =>
                            router.delete(`/todos/${todo.id}`)
                        }
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
}