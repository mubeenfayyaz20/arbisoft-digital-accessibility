// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
