import React from "react";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow p-4">
                <h1 className="text-xl font-bold">Synergy Community</h1>
            </header>
            <main className="p-4">{children}</main>
        </div>
    );
}