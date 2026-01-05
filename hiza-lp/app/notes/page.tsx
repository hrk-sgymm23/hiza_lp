import Image from "next/image";

type NoteItem = {
  title: string;
  description: string;
  image: string;
};

const notes: NoteItem[] = [
  {
    title: "Mountain Running / Hiking",
    description:
      "山が好きです。トレイルランや登山で自然を感じています。",
    image: "/images/notes/nozawa.jpg",
  },
  {
    title: "Music Festival",
    description:
      "フェスやライブによく行きます。写真は去年のフジロックです。",
    image: "/images/notes/fujirock.jpg",
  },
  {
    title: "Spice Curry",
    description:
      "スパイス料理にハマっています。神保町あたりが最高です。",
    image: "/images/notes/curry.jpg",
  },
];

export default function NotesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      {/* Title */}
      <header className="mb-20">
        <h1 className="text-3xl font-semibold">Notes</h1>
        <p className="mt-4 text-neutral-400">
          興味のある事柄について
        </p>
      </header>

      {/* Notes List */}
      <div className="space-y-24">
        {notes.map((note, index) => (
          <article
            key={note.title}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div
              className={`relative w-full h-[280px] ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={note.image}
                alt={note.title}
                fill
                className="object-cover rounded-lg opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>

            {/* Text */}
            <div className="text-neutral-300">
              <h2 className="text-xl text-neutral-700 mb-4">
                {note.title}
              </h2>
              <p className="leading-relaxed text-neutral-500">
                {note.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
