import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="min-h-[calc(100vh-160px)] flex items-center bg-[#f1f1f1] justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-8">We&apos;re working hard to bring you something amazing!</p>
        <Link
          href="/"
          className="inline-block bg-[#FF9E44] hover:bg-[#ff9431] text-white font-medium px-8 py-3 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}