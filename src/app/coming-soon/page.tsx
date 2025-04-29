import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 w-full min-h-screen flex items-center justify-center bg-[#161616] overflow-hidden">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">We&apos;re working hard to bring you something amazing!</p>
        <Link
          href="/"
          className="inline-block bg-[#FF9E44] hover:bg-[#ff9431] text-white font-medium px-8 py-3 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}