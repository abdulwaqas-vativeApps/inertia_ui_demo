import React from "react";
import AppLayout from "../layouts/AppLayout";
import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <AppLayout>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Welcome to Synergy Community
                </h2>
                <p className="mb-6">
                    Connect with your peers and manage your dashboard
                    efficiently.
                </p>
                <Link
                    href="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Login
                </Link>
            </div>
        </AppLayout>
    );
}
