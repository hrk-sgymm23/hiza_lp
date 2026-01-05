import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          HIZA
        </h1>
        <p className="mt-6 text-neutral-400">
          Haruki Sugiyama
        </p>
        <p className="mt-6 text-neutral-400">
          Software Engineer / Web Developer / Runner
        </p>

        <span className="absolute bottom-10 text-neutral-500 animate-bounce">
          Scroll ↓
        </span>
      </section>

      {/* Navigation */}
      <section className="max-w-3xl mx-auto px-6 py-32">
        <h2 className="text-xl mb-10 text-neutral-400">
          Explore
        </h2>

        <ul className="space-y-6 text-2xl">
          <li>
            <Link
              href="/career"
              className="hover:text-white transition"
            >
              Career →
            </Link>
          </li>
          <li>
            <Link
              href="/aboutme"
              className="hover:text-white transition"
            >
              About Me →
            </Link>
          </li>
          <li>
            <Link
              href="/notes"
              className="hover:text-white transition"
            >
              Notes →
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
