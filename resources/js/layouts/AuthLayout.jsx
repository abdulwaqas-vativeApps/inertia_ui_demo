import React from "react";

export default function AuthLayout({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                {children}
            </div>
        </div>
    );
}