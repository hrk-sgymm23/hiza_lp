export default function CareerPage() {
  type TagListProps = {
    stacks: string[];
  };
  
  type CompanyHeaderProps = {
    title: string;
    period: string;
    role: string;
  };

  type ProjectHeaderProps = {
    title: string;
    period: string;
    stacks: string[];
    children: string;
  }

  const e01 = [
    "Vue.js",
    "JavaScript",
    "Ruby on Rails",
    "Ruby",
    "AWS",
    "ECS",
    "RDS",
    "Terraform",
    "Stripe",
  ];

  const uganda = [
    "Python",
    "Google Cloud Platform",
    "DataFlow",
    "BigQuery",
    "Terraform"
  ]
  
  const valops = [
    "Python",
    "PowerBI",
    "DataBricks",
    "Azure Storage"
  ]

  const TagList = ({ stacks }: TagListProps) => (
    <div className="mt-3 flex flex-wrap gap-2">
      {stacks.map((stack) => (
        <span
          key={stack}
          className="px-2 py-1 border border-neutral-300 rounded-full text-[11px] leading-none text-neutral-700 bg-white"
        >
          {stack}
        </span>
      ))}
    </div>
  );

  const CompanyHeader = ({ title, period, role }: CompanyHeaderProps) => (
    <header className="space-y-1">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-medium text-neutral-900 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <p className="text-sm text-neutral-600">{period}</p>
      <p className="text-sm text-neutral-700">{role}</p>
    </header>
  );

  const Project = ({ title, period, stacks, children } : ProjectHeaderProps) => (
    <div className="mt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-neutral-800">{title}</h3>
          <p className="mt-1 text-sm text-neutral-500">{period}</p>
        </div>
      </div>

      {stacks?.length ? <TagList stacks={stacks} /> : null}

      <p className="mt-4 leading-relaxed text-neutral-600">{children}</p>
    </div>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Career
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          職務経歴・担当領域・利用技術のまとめ
        </p>
      </header>

      <div className="space-y-12">
        {/* CreationLine */}
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
          <CompanyHeader
            title="Creationline, Inc."
            period="2025/5 ~ Present"
            role="Software Engineer / Cloud Engineer / Data Engineer"
          />

          <Project
            title="大手自動車メーカー ValOps(データ基盤) 設計/構築/運用"
            period="2025/6 ~ Present"
            stacks={valops}
          >
            自動運転のAIモデルを評価する仕組みであるValOpsの基盤構築に従事している。
            具体的な内容としてはAIモデルが生成したデータの評価スクリプト作成。BIツールによるデータの可視化など。
          </Project>

          
        </section>

        {/* Menbers */}
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
          <CompanyHeader
            title="株式会社メンバーズ"
            period="2022/4 ~ 2025/5"
            role="Software Engineer / Cloud Engineer / Data Engineer"
          />

          <Project
            title="大手バイクメーカーデータ基盤 設計/構築/運用"
            period="2023/7 ~ 2025/5"
            stacks={uganda}
          >
            GoogleCloud DataFlow(Apache BeamをGoogle Cloud上でホストできるようにしたもの)の設計~運用まで一貫して行った。
            当プロジェクトにてクラウドを0から設計構築する経験を身につけた。（最適な構成、モジュールによる汎用化など。)
          </Project>

          <div className="my-8 h-px bg-neutral-200" />

          <Project
            title="大手バイクメーカー サブスクリプションサービスの開発/保守運用"
            period="2022/6 ~ 2024/5"
            stacks={e01}
          >
            クラウド・Webアプリケーション開発/運用。RubyonRailsを用いたバックエンドの開発。
            お客様個別対応によるパッチ適応。
            Vue.jsのフロントエンドの開発。
            当プロジェクトにてウェブアプリケーションの基礎また、アジャイルへの理解を深めた。
          </Project>
        </section>
      </div>
    </main>
  );
}
