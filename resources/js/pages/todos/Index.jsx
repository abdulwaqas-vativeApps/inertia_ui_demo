import React from "react";

import { useForm, router } from "@inertiajs/react";
import Button from "../../components/ui/Button";

export default function Todos({ todos }) {
    const { data, setData, post, reset } = useForm({
        title: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/todos", {
            onSuccess: () => reset(),
        });
    };
    console.log("todos =============>", todos);
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
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {
                            console.log("Updating ID:", todo.id);
                            router.put(
                                `/todos/${todo.id}`,
                                {},
                                {
                                    preserveScroll: true,
                                    preserveState: true,
                                },
                            );
                        }}
                    />

                    <span className={todo.completed ? "line-through" : ""}>
                        {todo.title}
                    </span>

                    <Button
                        variant="destructive"
                        onClick={() =>
                            router.delete(`/todos/${todo.id}`, {
                                preserveScroll: true,
                                preserveState: true,
                            })
                        }
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    );
}
