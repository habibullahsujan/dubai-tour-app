import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl">404 - Page Not Found</h1>
            <Link href={'/'}>Back to Homepage</Link>
        </div>
    );
}
