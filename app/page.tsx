// @ts-nocheck
"use client";

import { Nunito, DM_Sans, Caveat } from "next/font/google";
import content from "../data/content.json";

// /ui-ux-pro-max → Claymorphism + tactile soft UI
// Nunito (rounded display) + DM Sans (clean body) + Caveat used sparingly for handwritten warmth
const display = Nunito({ subsets: ["latin"], weight: ["700", "800", "900"] });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"] });
const script = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"] });

// /ui-ux-pro-max → Warm terracotta + fresh green palette (Recipe & Cooking)
const CLAY = "#9A3412";       // deep terracotta primary
const CLAY_LIGHT = "#C2410C"; // terracotta orange
const LEAF = "#059669";       // fresh green accent
const CREAM = "#FFFBEB";      // warm cream background
const INK = "#0F172A";        // text
const MUTED = "#64748B";      // body muted
const SHELL = "#F8F2F0";      // muted clay panel
const RIM = "#F2E6E2";        // border clay rim

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: CREAM, color: INK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes drift { 0% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(-2deg); } 100% { transform: translateY(0) rotate(-2deg); } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.15s forwards; opacity: 0; }
        .fade-up-d2 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.30s forwards; opacity: 0; }
        .drift { animation: drift 6s ease-in-out infinite; }
        .clay {
          background: ${CREAM};
          box-shadow: 8px 8px 16px rgba(154,52,18,0.12), -8px -8px 16px rgba(255,255,255,0.85);
          border-radius: 28px;
        }
        .clay-inset {
          background: ${SHELL};
          box-shadow: inset 5px 5px 10px rgba(154,52,18,0.10), inset -5px -5px 10px rgba(255,255,255,0.8);
          border-radius: 24px;
        }
        .clay-bean {
          background: linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY});
          box-shadow: 8px 8px 16px rgba(154,52,18,0.30), -4px -4px 12px rgba(255,255,255,0.20);
          border-radius: 28px;
        }
      `}</style>

      {/* NAV — claymorphic, rounded pill */}
      <nav className="sticky top-4 z-50 mx-4 md:mx-8">
        <div
          className="max-w-6xl mx-auto px-5 md:px-7 py-3 flex items-center justify-between clay"
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: `linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY})`,
                color: CREAM,
                fontWeight: 900,
                fontSize: 18,
                boxShadow: "4px 4px 8px rgba(154,52,18,0.25), -2px -2px 6px rgba(255,255,255,0.6)",
              }}
              aria-hidden
            >
              <span className={display.className}>M</span>
            </span>
            <span
              className={display.className}
              style={{ fontWeight: 900, color: INK, fontSize: 18, letterSpacing: "-0.01em" }}
            >
              Malaya <span style={{ color: CLAY }}>Coffee</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#story" className="hidden md:inline text-sm font-medium" style={{ color: MUTED }}>Story</a>
            <a href="#menu" className="hidden md:inline text-sm font-medium" style={{ color: MUTED }}>Menu</a>
            <a href="#visit" className="hidden md:inline text-sm font-medium" style={{ color: MUTED }}>Visit</a>
            <a
              href={phoneTel}
              className={`${display.className} text-sm font-extrabold inline-flex items-center gap-2`}
              style={{
                background: `linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY})`,
                color: CREAM,
                padding: "10px 20px",
                borderRadius: 999,
                boxShadow: "4px 4px 10px rgba(154,52,18,0.30), -2px -2px 6px rgba(255,255,255,0.45)",
              }}
            >
              Call us
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — storytelling split, photo right inside clay frame */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7 fade-up">
            <p className={`${script.className} text-2xl mb-3`} style={{ color: LEAF }}>
              Hello, Silverlake —
            </p>
            <h1
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: INK,
              }}
            >
              Filipino coffee. <br />
              <span style={{ color: CLAY }}>Pulled slow.</span>{" "}
              <span style={{ color: LEAF }}>Poured warm.</span>
            </h1>
            <p
              className="mt-7 text-lg leading-relaxed max-w-xl"
              style={{ color: MUTED }}
            >
              We pull single-origin beans from the Cordilleras and Sagada — paired with ube ice cream churned in-house. A Sunset Boulevard corner that runs on hand-built drinks, not a queue clock.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 items-start sm:items-center fade-up-d1">
              <a
                href={phoneTel}
                className={`${display.className}`}
                style={{
                  background: `linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY})`,
                  color: CREAM,
                  padding: "18px 32px",
                  borderRadius: 999,
                  boxShadow: "10px 10px 20px rgba(154,52,18,0.25), -6px -6px 16px rgba(255,255,255,0.6)",
                  fontWeight: 800,
                  fontSize: 16,
                  display: "inline-block",
                }}
              >
                Call to order · {content.contact.phone}
              </a>
              <a href="#menu" className={`${display.className}`} style={{ color: INK, fontWeight: 800, fontSize: 15 }}>
                See the menu ↓
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5 fade-up-d2">
              <div className="flex items-center gap-1" style={{ color: CLAY }}>
                {[1,2,3,4,5].map((i) => <span key={i}>★</span>)}
              </div>
              <p className="text-sm" style={{ color: MUTED }}>
                <strong style={{ color: INK }}>4.8</strong> · 61 Google reviews · Open 7 days
              </p>
            </div>
          </div>

          <div className="md:col-span-5 fade-up-d1">
            <div
              className="relative drift"
              style={{
                borderRadius: 36,
                overflow: "hidden",
                aspectRatio: "4 / 5",
                background: `linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY})`,
                boxShadow: "20px 20px 40px rgba(154,52,18,0.28), -12px -12px 32px rgba(255,255,255,0.7)",
              }}
            >
              <div
                className="absolute inset-3 bg-cover bg-center"
                style={{
                  borderRadius: 28,
                  backgroundImage: `url("${content.hero.image}")`,
                }}
              />
            </div>
            <div
              className="mt-6 px-6 py-5 clay flex items-center gap-4"
              style={{ borderRadius: 24 }}
            >
              <span
                className={display.className}
                style={{
                  background: LEAF,
                  color: CREAM,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  boxShadow: "3px 3px 6px rgba(5,150,105,0.35)",
                }}
              >
                ☕
              </span>
              <div>
                <p className={`${display.className}`} style={{ fontWeight: 800, color: INK, fontSize: 15 }}>
                  Single-origin · roasted weekly
                </p>
                <p className="text-sm" style={{ color: MUTED }}>
                  Cordillera · Sagada · Kalinga · Benguet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — full-width claymorphic story block */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p
              className={script.className}
              style={{ color: LEAF, fontSize: 28, transform: "rotate(-2deg)", display: "inline-block" }}
            >
              ✱ Our story
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: INK,
                letterSpacing: "-0.02em",
                marginTop: 18,
              }}
            >
              "Malaya" means <span style={{ color: CLAY }}>free.</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6" style={{ fontSize: "1.05rem", lineHeight: 1.75, color: INK }}>
            <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1" style={{ color: INK }}>
              {content.story.lead}
            </p>
            {content.story.paragraphs.map((p, i) => (
              <p key={i} style={{ color: MUTED }}>{p}</p>
            ))}
            <p className={`${script.className}`} style={{ color: CLAY, fontSize: 28 }}>
              — Salamat. See you on Sunset.
            </p>
          </div>
        </div>
      </section>

      {/* MENU — drinks as soft claymorphic tiles */}
      <section
        id="menu"
        style={{
          background: `linear-gradient(180deg, ${CREAM} 0%, ${SHELL} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className={`${script.className}`} style={{ color: LEAF, fontSize: 26 }}>
              The menu
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: INK,
                letterSpacing: "-0.02em",
              }}
            >
              What we brew, churn, and pour.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((s, i) => (
              <div key={i} className="clay p-7 md:p-8" style={{ borderRadius: 28 }}>
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={display.className}
                    style={{
                      background: i % 3 === 0 ? CLAY : i % 3 === 1 ? LEAF : INK,
                      color: CREAM,
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 15,
                      boxShadow: "3px 3px 6px rgba(154,52,18,0.18)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.price && (
                    <span
                      className={display.className}
                      style={{
                        color: CLAY,
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      {s.price}
                    </span>
                  )}
                </div>
                <h3
                  className={display.className}
                  style={{
                    fontWeight: 900,
                    fontSize: "1.35rem",
                    color: INK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {s.description}
                </p>
                {s.tag && (
                  <p
                    className={`${script.className} mt-4`}
                    style={{ color: LEAF, fontSize: 20 }}
                  >
                    {s.tag}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — single column, big soft-quote bubbles */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className={`${script.className}`} style={{ color: LEAF, fontSize: 26 }}>
            What the neighborhood says
          </p>
          <h2
            className={display.className}
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: INK,
              letterSpacing: "-0.02em",
            }}
          >
            Regulars, on the record.
          </h2>
        </div>
        <div className="space-y-8">
          {content.reviews.map((r, i) => (
            <div
              key={i}
              className="clay p-8 md:p-10 relative"
              style={{
                borderRadius: 28,
                marginLeft: i % 2 === 0 ? 0 : "auto",
                marginRight: i % 2 === 0 ? "auto" : 0,
                maxWidth: "92%",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: -18,
                  left: i % 2 === 0 ? 22 : "auto",
                  right: i % 2 === 0 ? "auto" : 22,
                  background: `linear-gradient(145deg, ${CLAY_LIGHT}, ${CLAY})`,
                  color: CREAM,
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 26,
                  boxShadow: "4px 4px 8px rgba(154,52,18,0.30)",
                }}
                className={display.className}
              >
                "
              </span>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: INK }}>
                {r.text}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className={`${display.className}`} style={{ fontWeight: 800, color: INK }}>
                  {r.name}
                  <span className="font-normal" style={{ color: MUTED, marginLeft: 8 }}>· {r.context}</span>
                </p>
                <div className="flex" style={{ color: CLAY }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT — warm clay block with map */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="clay p-8 md:p-12" style={{ borderRadius: 36 }}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <p className={`${script.className}`} style={{ color: LEAF, fontSize: 26 }}>
                Come say hi
              </p>
              <h2
                className={display.className}
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: INK,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                On Sunset, <br />between Hyperion and Silver Lake.
              </h2>

              <div className="mt-8 clay-inset p-6" style={{ borderRadius: 22 }}>
                <p className={`${display.className}`} style={{ fontWeight: 800, color: INK }}>
                  {content.contact.address.split(",")[0]}
                </p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>
                  {content.contact.address.split(",").slice(1).join(",").trim()}
                </p>
              </div>

              <p
                className={`${script.className} mt-8 mb-2`}
                style={{ color: CLAY, fontSize: 24 }}
              >
                Hours
              </p>
              <div className="space-y-2">
                {Object.entries(content.contact.hours).map(([day, time]) => {
                  const closed = String(time).toLowerCase().includes("closed");
                  return (
                    <div key={day} className="flex items-center justify-between text-sm py-1.5 border-b" style={{ borderColor: RIM }}>
                      <span className={display.className} style={{ fontWeight: 700, color: INK }}>
                        {day}
                      </span>
                      <span style={{ color: closed ? MUTED : INK, fontStyle: closed ? "italic" : "normal" }}>
                        {String(time)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <a
                href={phoneTel}
                className={`${display.className} block mt-10`}
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 900,
                  color: CLAY,
                  letterSpacing: "-0.01em",
                }}
              >
                {content.contact.phone}
              </a>
            </div>

            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                minHeight: 440,
                boxShadow: "inset 4px 4px 10px rgba(154,52,18,0.18), inset -4px -4px 10px rgba(255,255,255,0.7)",
                background: SHELL,
                padding: 8,
              }}
            >
              <iframe
                title="Location"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, minHeight: 424, borderRadius: 22 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — warm full-bleed claymorphic terracotta */}
      <section className="px-6 pb-20">
        <div
          className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center clay-bean"
          style={{ color: CREAM }}
        >
          <p className={`${script.className}`} style={{ color: "#FFE9D6", fontSize: 28 }}>
            One more thing —
          </p>
          <h3
            className={display.className}
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Pour one for someone <br />you love.
          </h3>
          <a
            href={phoneTel}
            className={`${display.className} inline-block mt-8`}
            style={{
              background: CREAM,
              color: CLAY,
              padding: "20px 36px",
              borderRadius: 999,
              fontWeight: 900,
              fontSize: 16,
              boxShadow: "8px 8px 18px rgba(0,0,0,0.25), -4px -4px 12px rgba(255,255,255,0.20)",
            }}
          >
            Call {content.contact.phone}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <p className={display.className} style={{ fontWeight: 900, color: INK, fontSize: 18 }}>
              Malaya <span style={{ color: CLAY }}>Coffee</span>
            </p>
            <p className={`${script.className} mt-1`} style={{ color: LEAF, fontSize: 20 }}>
              Filipino-rooted · Silverlake-poured
            </p>
          </div>
          <div className="text-sm" style={{ color: MUTED }}>
            <p>{content.contact.address}</p>
            <p className="mt-1">{content.contact.phone}</p>
          </div>
          {content.social && (
            <div className="flex flex-wrap gap-4 md:justify-end text-sm">
              {Object.entries(content.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={String(url)}
                  className={display.className}
                  style={{
                    background: SHELL,
                    color: INK,
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    boxShadow: "3px 3px 6px rgba(154,52,18,0.10), -2px -2px 5px rgba(255,255,255,0.7)",
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="text-xs mt-8 pt-6 border-t text-center" style={{ borderColor: RIM, color: MUTED }}>
          © {new Date().getFullYear()} Malaya Coffee. Slow-poured on Sunset Boulevard.
        </div>
      </footer>
    </main>
  );
}
