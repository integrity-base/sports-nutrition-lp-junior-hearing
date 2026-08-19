import { useState } from "react";

// ─── Local images ─────────────────────────────────────────────────────────────
import imgHero from "./imports/B1C4B53C-38A2-4EE1-8A09-5A40BA91BF8E_L0_001-2026_7_27_18_22_44.jpg";
import imgCookingChoco from "./imports/4CE0B131-9D9A-4234-8D8E-F18824C97A5B_L0_001-2026_7_12_12_30_24.jpg";
import imgCookingDough from "./imports/30313456-77BD-43C8-AFD4-3C57DD0B40A2_L0_001-2026_7_12_12_29_56.jpg";
import imgCookingPan from "./imports/7ABD70F7-D0FC-4F26-913A-E1B2D9AD1CAB_L0_001-2026_7_12_12_55_34.jpg";
import imgKidCutting from "./imports/6F721395-C3BE-47FB-9419-68924C3E126C_L0_001-2026_7_12_12_55_24.jpg";
import imgVenue from "./imports/9E39B273-5D41-404F-B47D-07F9C2B6697E.JPEG.JPEG";
import imgKitchen from "./imports/732B5738-588D-4624-B559-B34DB1462BFB_L0_001-2025_10_23_14_24_59.jpg";
import imgYano from "./imports/_______-1.jpg";
import imgLogo from "./imports/1D80A95E-D5D3-495A-8686-D7C728669023_L0_001-2025_6_28_17_39_55-1.png";
import imgCharaFront from "./imports/5ec29042-efa3-4ec3-9b4a-9a288e3a98f2-1.png";
import imgHearing from "./imports/IMG_1732.jpg";
import imgGroupCooking from "./imports/FEE03551-A182-4941-BA32-F53B653028D3_L0_001-2025_12_20_14_41_01.jpeg";
import imgRolling from "./imports/DB14CF01-D593-4467-8D89-50E26701B553_L0_001-2026_5_17_21_18_20.jpg";
import imgCharaPeek from "./imports/168985a1-c235-4d6e-a209-729d37468593.png";
import imgCharaGuide from "./imports/d7250647-7dcf-4eae-812b-04625d09b74b.png";

// ─── Brand constants ───────────────────────────────────────────────────────────
const TURQUOISE = "#0BBDCC";
const GOLD = "#C9972B";
const LINE_GREEN = "#06C755";

// ─── Unsplash photo helpers ────────────────────────────────────────────────────
const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;


// ─── LINE CTA button ──────────────────────────────────────────────────────────
function LineButton({ label = "公式LINEで初回ヒアリングの日程を相談する", sub = "" }: { label?: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href="#line"
        className="flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-bold text-[15px] leading-snug shadow-lg active:scale-95 transition-transform w-full max-w-sm justify-center"
        style={{ background: LINE_GREEN }}
      >
        <LineIcon />
        <span className="text-left">{label}</span>
      </a>
      {sub && <p className="text-xs text-gray-500">{sub}</p>}
    </div>
  );
}

function LineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M19.952 10.815C19.952 7.053 16.394 4 12 4C7.606 4 4.048 7.053 4.048 10.815C4.048 14.22 6.975 17.069 10.923 17.535C11.182 17.592 11.536 17.707 11.628 17.93C11.71 18.133 11.682 18.447 11.655 18.649L11.503 19.575C11.458 19.778 11.328 20.364 12 20.098C12.672 19.833 15.71 17.897 17.109 16.292C18.078 15.206 19.952 13.218 19.952 10.815ZM9.13 13.04H7.607C7.378 13.04 7.192 12.856 7.192 12.629V9.038C7.192 8.811 7.378 8.627 7.607 8.627C7.836 8.627 8.022 8.811 8.022 9.038V12.217H9.13C9.359 12.217 9.545 12.401 9.545 12.629C9.545 12.856 9.359 13.04 9.13 13.04ZM10.754 12.629C10.754 12.856 10.568 13.04 10.339 13.04C10.11 13.04 9.924 12.856 9.924 12.629V9.038C9.924 8.811 10.11 8.627 10.339 8.627C10.568 8.627 10.754 8.811 10.754 9.038V12.629ZM14.658 12.629C14.658 12.82 14.518 12.988 14.324 13.029C14.295 13.035 14.265 13.04 14.236 13.04C14.08 13.04 13.936 12.966 13.846 12.84L12.317 10.736V12.629C12.317 12.856 12.131 13.04 11.902 13.04C11.673 13.04 11.487 12.856 11.487 12.629V9.038C11.487 8.848 11.627 8.679 11.821 8.638C11.85 8.632 11.88 8.627 11.909 8.627C12.065 8.627 12.209 8.701 12.299 8.827L13.828 10.931V9.038C13.828 8.811 14.014 8.627 14.243 8.627C14.472 8.627 14.658 8.811 14.658 9.038V12.629ZM16.808 10.14C17.037 10.14 17.223 10.324 17.223 10.551C17.223 10.779 17.037 10.963 16.808 10.963H15.7V11.633H16.808C17.037 11.633 17.223 11.817 17.223 12.044C17.223 12.272 17.037 12.456 16.808 12.456H15.285C15.056 12.456 14.87 12.272 14.87 12.044V9.627C14.87 9.4 15.056 9.216 15.285 9.216H16.808C17.037 9.216 17.223 9.4 17.223 9.627C17.223 9.855 17.037 10.039 16.808 10.039H15.7V10.14H16.808Z" />
    </svg>
  );
}

// ─── Section label component ──────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-5 h-[2px]" style={{ background: GOLD }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>{children}</span>
    </div>
  );
}

// ─── Main LP component ────────────────────────────────────────────────────────
export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#1A2530] overflow-x-hidden">
      {/* ── Sticky header ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div>
          <img src={imgLogo} alt="SAILS OKINAWA" className="h-8 w-auto" />
        </div>
        <a
          href="#line"
          className="flex items-center gap-1.5 text-white text-[11px] font-bold px-3 py-2 rounded-xl"
          style={{ background: LINE_GREEN }}
        >
          <LineIcon />
          <span className="hidden sm:inline">LINE相談</span>
        </a>
      </header>

      {/* ── 01 ファーストビュー ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Turquoise accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${TURQUOISE}, #0899A6)` }} />

        <div className="max-w-lg mx-auto px-5 pt-8 pb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold mb-5" style={{ borderColor: TURQUOISE, color: TURQUOISE, background: "#E6F8FA" }}>
            <span>小学生・中学生・高校生 対象</span>
          </div>

          {/* Main copy */}
          <h1 className="text-[26px] sm:text-[30px] font-black leading-tight mb-4 tracking-tight">
            スポーツを頑張る子の食事、<br />
            <span style={{ color: TURQUOISE }}>「これで合ってる？」</span><br />
            を一緒に整理します。
          </h1>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
            今の食事や練習状況、お子さまの目標を確認しながら、今できていることと、これから見直したいことを一緒に整理します。
          </p>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-teal-50" style={{ aspectRatio: "16/10" }}>
            <img
              src={imgHearing}
              alt="子どもと保護者が矢野麻帆と一緒に初回ヒアリングを受けている様子"
              className="w-full h-full object-cover object-center"
            />
            {/* Info chips overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {[["初回スポーツ栄養ヒアリング", true], ["60〜90分", false], ["4,400円（税込）", false]].map(([label, isPrimary], i) => (
                <span key={i} className="text-[11px] font-bold px-2.5 py-1 rounded-full shadow" style={{
                  background: isPrimary ? TURQUOISE : "rgba(255,255,255,0.92)",
                  color: isPrimary ? "#fff" : GOLD
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <LineButton sub="LINEで日程・相談内容を確認します" />
        </div>
      </section>

      {/* ── 02 こんなお悩みありませんか？ ────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <SectionLabel>お悩み</SectionLabel>
              <h2 className="text-[20px] font-black leading-tight mb-6">
                こんなお悩み、<br />ありませんか？
              </h2>
            </div>
            <img src={imgCharaPeek} alt="" aria-hidden className="w-20 shrink-0 mt-1 drop-shadow-sm" />
          </div>

          <ul className="space-y-3 mb-6">
            {[
              "身体を大きくしたいけど、何をどれくらい食べたらいい？",
              "食べる量が少なくて、必要な量を食べられているか心配",
              "練習前後の補食、何を食べさせたらいい？",
              "毎日ご飯を作っているけど、今の食事で足りているのか分からない",
              "本人にも食事の大切さを分かってほしい",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                <span className="text-lg mt-0.5">😔</span>
                <span className="text-[14px] leading-snug text-gray-700">{text}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl p-4 border-l-4" style={{ borderColor: TURQUOISE, background: "white" }}>
            <p className="text-[14px] font-bold leading-relaxed" style={{ color: "#1A2530" }}>
              同じ「食事の悩み」でも、競技や練習量、成長、生活リズムによって見るところは一人ひとり違います。
            </p>
            <p className="text-[14px] font-black mt-2" style={{ color: TURQUOISE }}>
              だから、まずお子さまの「今」を確認します。
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 初回ヒアリングで確認すること ──────────────────────────────── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionLabel>ヒアリング内容</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-2">
            初回ヒアリングで<br />確認すること
          </h2>
          <p className="text-[13px] text-gray-500 mb-7">4つの視点から、お子さまの今を整理します</p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "01", title: "競技・練習", desc: "競技、ポジション、練習量など" },
              { num: "02", title: "身体・目標", desc: "身体づくり、競技でどうなりたいか" },
              { num: "03", title: "食事・補食", desc: "普段の食事、食べる量、補食" },
              { num: "04", title: "生活・悩み", desc: "生活リズム、ご家庭で困っていること" },
            ].map((card) => (
              <div key={card.num} className="rounded-2xl p-4 border border-gray-100 shadow-sm">
                <div className="text-[22px] font-black mb-1" style={{ color: GOLD }}>{card.num}</div>
                <div className="text-[14px] font-bold mb-1">{card.title}</div>
                <div className="text-[12px] text-gray-500 leading-snug">{card.desc}</div>
              </div>
            ))}
          </div>

          {/* Food photo highlight */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-teal-100 bg-teal-50">
            <div className="flex items-stretch">
              <div className="w-24 shrink-0 bg-teal-50">
                <img
                  src={imgHearing}
                  alt="食事写真を確認しながらヒアリング"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1 p-4">
                <p className="text-[13px] font-black" style={{ color: TURQUOISE }}>普段の食事写真も見ながら確認します。</p>
                <p className="text-[12px] text-gray-600 mt-1 leading-snug">朝・昼・夜・補食など、実際に食べているものを事前にLINEで送ってもらいます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 整理できること ─────────────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <SectionLabel>初回を受けると</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-8">
            初回を受けると<br />整理できること
          </h2>

          <div className="space-y-0">
            {[
              { step: "01", title: "今できていることが分かる", icon: "✅" },
              { step: "02", title: "見直したいところが整理できる", icon: "🔍" },
              { step: "03", title: "まず何から取り組むかが分かる", icon: "🎯" },
            ].map((item, i) => (
              <div key={item.step}>
                <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[13px] shrink-0"
                    style={{ background: TURQUOISE }}>
                    {item.step}
                  </div>
                  <div className="text-[15px] font-bold">{item.title}</div>
                  <span className="ml-auto text-xl">{item.icon}</span>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-5" style={{ background: GOLD }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-[14px] font-black text-gray-700 mb-6">
              全部を一度に変えるのではなく、<br />
              <span style={{ color: TURQUOISE }}>今のお子さまに必要なことから。</span>
            </p>
            <LineButton sub="LINEで日程・相談内容を確認します" />
          </div>
        </div>
      </section>

      {/* ── 05 お子さま本人の話も聞きます ────────────────────────────────── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionLabel>お子さま本人</SectionLabel>
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-1">
              <h2 className="text-[20px] font-black leading-tight">
                お子さま本人の<br />話も聞きます
              </h2>
            </div>
            <img src={imgCharaGuide} alt="" aria-hidden className="w-20 shrink-0 drop-shadow-sm" />
          </div>

          {/* Photo */}
          <div className="rounded-2xl overflow-hidden bg-teal-50 mb-6" style={{ aspectRatio: "4/3" }}>
            <img
              src={imgGroupCooking}
              alt="矢野麻帆と子どもたちが一緒にテーブルを囲んで補食づくりをしている様子"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
            食事を準備するのは保護者でも、<strong className="font-bold" style={{ color: "#1A2530" }}>実際に食べて、練習や試合をするのはお子さま本人です。</strong>
          </p>

          <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
            だからSAILSでは、保護者の困りごとだけでなく、
          </p>

          <ul className="space-y-2 mb-5 pl-2">
            {["競技でどうなりたいか", "食事についてどう感じているか"].map((t, i) => (
              <li key={i} className="flex items-center gap-2 text-[14px] text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
                {t}
              </li>
            ))}
          </ul>

          <p className="text-[14px] text-gray-700 leading-relaxed mb-5">
            も大切にしています。初回前には、お子さま本人にも事前アンケートに回答してもらいます。
          </p>

          <div className="rounded-xl p-4 border-l-4" style={{ borderColor: GOLD, background: "#FBF4E6" }}>
            <p className="text-[14px] font-black leading-relaxed" style={{ color: "#1A2530" }}>
              自分の目標と食事がどうつながっているのか。<br />
              <span style={{ color: GOLD }}>親子で一緒に考えるきっかけに。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 06 補食も一緒に作ります ───────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <SectionLabel>補食づくり</SectionLabel>
              <h2 className="text-[20px] font-black leading-tight mb-4">
                話を聞くだけではなく、<br />補食も一緒に作ります
              </h2>
            </div>
            <img src={imgCharaGuide} alt="" aria-hidden className="w-16 shrink-0 mt-2 drop-shadow-sm" />
          </div>

          {/* 3 pillars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {["スポーツ栄養", "衛生の基本", "補食づくり"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="bg-white rounded-xl px-3 py-2 text-center shadow-sm">
                  <span className="text-[13px] font-black" style={{ color: TURQUOISE }}>{label}</span>
                </div>
                {i < 2 && <span className="font-bold text-gray-300">＋</span>}
              </div>
            ))}
          </div>

          {/* Cooking photos */}
          <div className="rounded-2xl overflow-hidden bg-teal-50 mb-3" style={{ aspectRatio: "4/3" }}>
            <img
              src={imgRolling}
              alt="矢野麻帆と子どもが一緒に生地を丸めて補食を作っている様子"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-5">
            <div className="rounded-xl overflow-hidden bg-amber-50" style={{ aspectRatio: "4/3" }}>
              <img
                src={imgCookingChoco}
                alt="子どもが生地にチョコレートを入れて補食を作っている様子"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-orange-50" style={{ aspectRatio: "4/3" }}>
              <img
                src={imgCookingPan}
                alt="フライパンで補食を調理している様子"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-[14px] text-gray-700 leading-relaxed">
            練習や部活にも取り入れやすい補食を実際に作りながら、家庭で調理するときに知っておきたい衛生の基本も伝えます。
          </p>
          <p className="text-[14px] font-bold mt-2" style={{ color: TURQUOISE }}>
            「聞いて終わり」ではなく、家に帰ってから実践するところまで。
          </p>
        </div>
      </section>

      {/* ── 07 当日の流れ ─────────────────────────────────────────────────── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionLabel>当日の流れ</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-2">当日の流れ</h2>
          <div className="flex items-center gap-2 mb-7">
            <span className="text-[13px] px-3 py-1 rounded-full font-bold text-white" style={{ background: TURQUOISE }}>
              所要時間：60〜90分
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden bg-teal-50 mb-7" style={{ aspectRatio: "16/9" }}>
            <img
              src={imgKitchen}
              alt="SAILSのキッチンカウンターで実習している様子"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-3.5 top-4 bottom-4 w-0.5" style={{ background: `linear-gradient(to bottom, ${TURQUOISE}, ${GOLD})` }} />

            {[
              {
                num: "01", title: "スポーツ栄養ヒアリング",
                desc: "競技、練習状況、身体づくりの目標、食事、補食、生活リズムなどを確認。",
              },
              {
                num: "02", title: "衛生の基本",
                desc: "手洗い、調理器具の扱い、交差汚染、温度管理など。",
              },
              {
                num: "03", title: "補食づくり",
                desc: "実際に一緒に調理。",
              },
              {
                num: "04", title: "振り返り",
                desc: "今できていること、見直したいこと、まず取り組むことを整理。",
              },
            ].map((step, i, arr) => (
              <div key={step.num} className={`relative flex gap-4 ${i < arr.length - 1 ? "mb-7" : ""}`}>
                {/* Dot */}
                <div className="absolute -left-8 w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black shrink-0"
                  style={{ background: i < 2 ? TURQUOISE : GOLD }}>
                  {step.num}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="text-[15px] font-black mb-1">{step.title}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 担当者 ─────────────────────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <SectionLabel>担当者</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-6">担当者</h2>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-5">
              {/* Photo */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-teal-50 shrink-0">
                <img
                  src={imgYano}
                  alt="矢野麻帆 – 栄養士・調理師・製菓衛生師・保育士"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold mb-0.5" style={{ color: GOLD }}>SAILS OKINAWA</p>
                <h3 className="text-[20px] font-black leading-tight mb-1">矢野 麻帆</h3>
                <div className="flex flex-wrap gap-1">
                  {["栄養士", "調理師", "製菓衛生師", "保育士"].map((q) => (
                    <span key={q} className="text-[10px] px-2 py-0.5 rounded-full border font-bold" style={{ borderColor: TURQUOISE, color: TURQUOISE, background: "#E6F8FA" }}>{q}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 space-y-3 border-t border-gray-50 pt-4">
              <p className="text-[13px] text-gray-700 leading-relaxed">
                ジュニアアスリートからプロ選手まで、食事や身体づくりのサポートを行っています。
              </p>
              <p className="text-[13px] text-gray-700 leading-relaxed">
                栄養について「知る」だけではなく、毎日の食事でどう実践するかまで一緒に考えることを大切にしています。
              </p>
              <p className="text-[13px] font-bold leading-relaxed" style={{ color: TURQUOISE }}>
                競技や練習量、成長、生活リズム、目標は一人ひとり違うため、決まった食事方法を当てはめず、その子の今の状態から考えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 開催場所 ───────────────────────────────────────────────────── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionLabel>開催場所</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-6">開催場所</h2>

          <div className="rounded-2xl overflow-hidden bg-teal-50 mb-4" style={{ aspectRatio: "4/3" }}>
            <img
              src={imgVenue}
              alt="SAILSの白を基調とした清潔感ある店内、ターコイズのペンダントライト"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" style={{ color: TURQUOISE }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
            </svg>
            <div>
              <p className="text-[13px] font-bold">仲西1丁目2-1 共和ビル3階-B</p>
              <p className="text-[11px] text-gray-500 mt-0.5">白を基調とした清潔感のある店内で行います</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 料金 ───────────────────────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <SectionLabel>料金</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-6">料金</h2>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-teal-100">
            <div className="text-center mb-5 pb-5 border-b border-gray-100">
              <p className="text-[13px] font-bold text-gray-500 mb-1">初回スポーツ栄養ヒアリング</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[40px] font-black" style={{ color: TURQUOISE }}>4,400</span>
                <span className="text-[16px] font-bold text-gray-600">円（税込）</span>
              </div>
              <div className="inline-flex items-center gap-1 mt-1 px-3 py-1 rounded-full text-[12px] font-bold" style={{ background: "#E6F8FA", color: TURQUOISE }}>
                所要時間：60〜90分
              </div>
            </div>

            <p className="text-[12px] font-bold text-gray-500 mb-3">含まれる内容</p>
            <ul className="space-y-2 mb-5">
              {["スポーツ栄養ヒアリング", "衛生指導", "補食づくり", "振り返り"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
              ※ 兄弟など複数名でのご相談や、ご相談内容によって料金が異なる場合があります。その場合は事前に公式LINEで内容を確認したうえで料金をご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* ── 11 LINEしてからどうなる？ ───────────────────────────────────── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-lg mx-auto">
          <SectionLabel>申込の流れ</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-7">
            公式LINEで相談したあとは？
          </h2>

          <div className="space-y-0">
            {[
              { icon: "💬", title: "LINEで問い合わせ", desc: "「初回ヒアリング希望」とメッセージを送信" },
              { icon: "📋", title: "日程・人数・相談内容を確認", desc: "個別に確認のうえ、日程を調整します" },
              { icon: "💳", title: "料金をご案内 → お支払い", desc: "内容確定後、Squareの決済リンクをお送りします" },
              { icon: "📸", title: "食事写真・事前アンケートなどの準備", desc: "LINEで食事写真を送っていただき、お子さま本人にアンケートへ回答してもらいます" },
              { icon: "🥗", title: "初回ヒアリング当日", desc: "60〜90分のヒアリング・補食づくりを行います" },
            ].map((step, i, arr) => (
              <div key={step.title}>
                <div className="flex gap-4 items-start bg-white">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 border-2"
                    style={{ borderColor: i === 0 ? LINE_GREEN : TURQUOISE, background: i === 0 ? "#f0fff4" : "#E6F8FA" }}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-black">{step.title}</p>
                    <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{step.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex pl-5 py-1">
                    <div className="w-0.5 h-5" style={{ background: "#E0F4F6" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl p-3 text-[12px] text-gray-500 border border-amber-100 bg-amber-50 flex gap-2">
            <span className="shrink-0">💡</span>
            <span>LINEを送った時点では予約確定ではありません。日程・内容を確認してからのご案内となります。</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: "#F4FBFC" }}>
        <div className="max-w-lg mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[20px] font-black leading-tight mb-6">よくある質問</h2>

          <div className="space-y-2">
            {[
              {
                q: "兄弟まとめて相談できますか？",
                a: "可能です。兄弟など複数名の場合は一人ひとりの競技状況・食事・目標を確認するため、料金が変わる場合があります。まずLINEでご相談ください。",
              },
              {
                q: "子どもだけの参加でもいいですか？",
                a: "基本的にはお子さまと保護者で一緒にご参加いただくことをおすすめしています。食事サポートは保護者の協力が大切なため、一緒に確認する時間を設けています。",
              },
              {
                q: "オンラインでも受けられますか？",
                a: "現在は対面のみです。補食づくりも含まれるため、実際にお越しいただくかたちとなります。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[13px] font-bold pr-3">{item.q}</span>
                  <span className="shrink-0 text-lg" style={{ color: TURQUOISE }}>
                    {openFaq === i ? "−" : "＋"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-[13px] text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 最終CTA ────────────────────────────────────────────────────── */}
      <section id="line" className="py-14 px-5" style={{ background: `linear-gradient(160deg, #0BBDCC 0%, #0899A6 100%)` }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img src={imgCharaFront} alt="" aria-hidden className="w-24 drop-shadow-sm" />
          </div>

          <h2 className="text-[22px] font-black leading-tight text-white mb-3">
            まずは、<br />お子さまの「今」を知るところから。
          </h2>

          <p className="text-[13px] text-white/80 leading-relaxed mb-6">
            今できていることも確認しながら、<br />お子さまの競技や目標に合わせて、<br />
            <strong className="text-white">「これから何をしたらいい？」</strong><br />
            を一緒に整理します。
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 mb-5">
            <div className="flex justify-between text-white/90 text-[13px] font-bold mb-1">
              <span>初回スポーツ栄養ヒアリング</span>
              <span>4,400円（税込）</span>
            </div>
            <div className="text-white/70 text-[12px]">所要時間：60〜90分 ／ 対象：小学生・中学生・高校生</div>
          </div>

          <a
            href="https://line.me/R/ti/p/@sails-okinawa"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl text-white font-black text-[15px] shadow-xl mb-3 active:scale-95 transition-transform"
            style={{ background: LINE_GREEN }}
          >
            <LineIcon />
            公式LINEで初回ヒアリングの日程を相談する
          </a>

          <p className="text-[12px] text-white/70 mb-6">
            「初回ヒアリング希望」とメッセージをお送りください。<br />
            LINEで日程・相談内容を確認します。
          </p>

          {/* QR code for desktop */}
          <div className="hidden sm:flex flex-col items-center gap-2 mt-4 bg-white/10 rounded-2xl p-4 max-w-[200px] mx-auto">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center text-gray-400 text-[11px]">
              QRコード
            </div>
            <p className="text-[11px] text-white/70">PCでご覧の方はQRコードからどうぞ</p>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="py-6 px-5 bg-[#1A2530] text-center">
        <img src={imgLogo} alt="SAILS OKINAWA" className="h-8 w-auto mx-auto opacity-40 invert" />
        <p className="text-[10px] text-white/30 mt-3">栄養士と学ぶ こども・アスリート・おうちごはん</p>
      </footer>
    </div>
  );
}
