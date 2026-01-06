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

  const uganda_app = [
    "Python",
    "Flask",
    "Vue.js",
    "TypeScript",
    "Google Cloud Platform",
    "Cloud Run",
    "Firestore",
    "Firebase Authentication",
    "Terraform"
  ]
  
  const valops = [
    "Python",
    "PowerBI",
    "DataBricks",
    "Azure Storage"
  ]

  const kit = [
    "Swift",
    "ARKit",
    "Firebase",
    "React",
    "TypeScript",
    "Next.js",
    "Vercel",
    "GitHub Actions"
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
            title="大手バイクメーカー バイク管理アプリケーション 設計/構築/運用"
            period="2023/7 ~ 2025/5"
            stacks={uganda_app}
          >
            データ基盤にて収集している車体自体を管理するアプリケーションの設計~運用まで一貫して行った。
            当プロジェクトにてFlaskを用いたWebアプリケーションの開発経験を身につけた。またGoogleCloudによるサーバーレスアーキテクチャの理解を深めた。
          </Project>

          <div className="my-8 h-px bg-neutral-200" />

          <Project
            title="大手バイクメーカー データ基盤 設計/構築/運用"
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

        {/* KIT */}
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
          <CompanyHeader
            title="金沢工業大学 出原研究室"
            period="2021/5 ~ 2022/3"
            role="Software Engineer / Mobile Developer"
          />

          <Project
            title="学生用アプリケーション 「知の共創キャンパス」の開発"
            period="2021/5 ~ 2022/3"
            stacks={kit}
          >
            今まで所属した学生が作成した卒論をアプリケーションのAR上で閲覧できるようにするアプリケーション「知の共創キャンパス」をゼミメンバー3人で構築。
            構成としてはネイティブアプリのクライアントサイドにSwift,管理画面はNext.jsで実装。バックエンドはFirebaseを利用した。
            私は主にiOSアプリケーションの開発を担当し、SwiftやARKitを用いてARコンテンツの表示機能を実装した。
          </Project>

          
        </section>

      </div>
    </main>
  );
}
