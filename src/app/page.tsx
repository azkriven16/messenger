"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Upload from "@/components/upload";

export default function Home() {
    const tasks = useQuery(api.messages.list);
    return (
        <main>
            <Upload />
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
            </div>
        </main>
    );
}
