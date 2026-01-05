export default function AboutMePage() {
  const stacks = [
    "Python",
    "Terraform",
    "AWS",
    "Google Cloud Platform",
    "Apache Beam",
    "DataBricks",
    "Claude Code",
    "Ruby",
    "Ruby on Rails",
    "TypeScript",
    "Next.js",
    "React",
    "Vue.js",
    "Tailwind CSS",
    "MySQL",
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
    "GitHub Actions",
    "GitLab CI/CD",
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold mb-12">About Me</h1>
        <p className="mt-3 text-sm text-neutral-600">
          学歴、職歴、強み、技術スタックなど
        </p>
      </header>

      <h2 className="text-3xl font-semibold mb-12 text-neutral-700">
        Background
      </h2>

      <p className="mb-12 text-neutral-500">
        金沢工業情報フロンティア学部メディア情報学科卒業。 <br />
        プログラミングやネットワーク、セキュリティ、データベースまたCGやゲーム制作など幅広く学んだ。 <br />
        卒業後は、プライム上場の受託系開発会社に新卒として入社。<br />
        クラウド・Webアプリケーション開発に従事し、ウェブアプリケーションの開発/運用やデータストリーミング基盤の構築/運用を担当。<br />
        3年所属後、データやクラウドに傾倒したいと思い転職。現在は、Webアプリケーション、クラウドのコンサルティング、設計開発を行う企業にてデータ/クラウドエンジニアとしてデータ基盤の構築/運用を担当している。
      </p>

      <h2 className="text-3xl font-semibold mb-12 text-neutral-700">Strengths</h2>
      <ul className="list-disc list-inside mb-12 space-y-2 text-neutral-500">
        <li>問題解決能力: 複雑な課題を分析し、効果的な解決策を見つける力。</li>
        <li>コミュニケーション: チーム内外での円滑な情報共有と協力。</li>
        <li>継続的学習: 新しい技術や知識を積極的に学び、成長し続ける姿勢。</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-12 text-neutral-700">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="px-4 py-2 border border-neutral-700 rounded-full text-sm"
          >
            {stack}
          </span>
        ))}
      </div>
    </main>
  );
}
