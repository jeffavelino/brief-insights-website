import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import {
  ScanText,
  ShieldCheck,
  Zap,
  Workflow,
  FileWarning,
  Plug,
  ArrowRight,
  Clock,
  CheckCheck,
  MoveRight,
  Menu,
  Mail,
  Server,
  Trash2,
  Lock,
  Building2,
  Landmark,
  TrendingUp,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DemoModal from "@/components/DemoModal";
import { smoothScrollToId } from "@/lib/scrollToHash";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import digitalSolution from "@/assets/Gemini_Generated_Digital_Solution.png";
import logoImg from "@/assets/Brief_Insights_name_color.png";
import heroVideo from "@/assets/Video_Generation_for_Counselor_Paperwork.mp4";
import ProblemPage from "@/components/Templates/ProblemPage";
import Header from "@/components/Organism/Header";
import Footer from "@/components/Organism/Footer";
import AnimatedWords from "@/components/Atoms/AnimatedWords";

// ─── Hero ───────────────────────────────────────────────────────────────────
const Hero = ({ onRequestDemo }: { onRequestDemo: () => void }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover dark:grayscale dark:contrast-125 transition-all duration-700"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Cinematic dark/light overlay fading from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black/95 dark:via-black/90 dark:to-black/50 w-full transition-colors duration-700" />

      {/* Subtle vignette — darkens edges for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 md:pt-32 flex flex-col items-start text-left">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs font-semibold uppercase tracking-widest text-foreground/70 dark:text-white/50 mb-8"
          >
            Intelligent Document Processing · Berlin, Germany
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <AnimatedWords
              text={t("hero.title1")}
              className="block text-foreground dark:text-white"
              delay={0.25}
              animate
            />
            <AnimatedWords
              text={t("hero.title2")}
              className="block font-serif italic font-normal tracking-normal text-primary"
              delay={0.45}
              animate
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-foreground/80 dark:text-white/70 max-w-2xl mb-10"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex items-center justify-start gap-4"
          >
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/40"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

// ─── Stats Bar ──────────────────────────────────────────────────────────────
const StatsBar = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "90%", label: t("stats.timeSaved") },
    { value: "~15 min", label: t("stats.downFrom") },
    { value: "4,000+", label: t("stats.counselors") },
  ];

  return (
    <section className="bg-section-orange px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-3 gap-px bg-foreground/10 rounded-xl overflow-hidden border border-foreground/10"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-background/80 px-8 py-7 flex flex-col gap-1"
          >
            <span className="text-3xl font-bold text-primary tracking-tight">
              {s.value}
            </span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// ─── Before / After ─────────────────────────────────────────────────────────
const BeforeAfter = () => {
  const { t } = useTranslation();

  const beforeItems = [
    t("beforeAfter.before1"),
    t("beforeAfter.before2"),
    t("beforeAfter.before3"),
    t("beforeAfter.before4"),
    t("beforeAfter.before5"),
  ];

  const afterItems = [
    t("beforeAfter.after1"),
    t("beforeAfter.after2"),
    t("beforeAfter.after3"),
    t("beforeAfter.after4"),
    t("beforeAfter.after5"),
  ];

  return (
    <section id="before-after" className="bg-section-blue px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
            {t("beforeAfter.label")}
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl text-foreground leading-tight">
            <AnimatedWords text={t("beforeAfter.title")} delay={0.1} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-start">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card bento-card-frosted rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t("beforeAfter.beforeLabel")}
              </span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Clock className="h-4 w-4 shrink-0 mt-0.5 text-destructive/60" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center pt-14"
          >
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-background/60 border border-foreground/10">
              <MoveRight className="h-4 w-4 text-foreground" />
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bento-card bento-card-frosted rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-status-online animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t("beforeAfter.afterLabel")}
              </span>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCheck className="h-4 w-4 shrink-0 mt-0.5 text-status-online" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Animated time bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 bento-card bento-card-frosted rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground font-mono">
              {t("beforeAfter.timePerCase")}
            </span>
            <span className="text-xs font-semibold text-status-online">
              {t("beforeAfter.reduction")}
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>{t("beforeAfter.manualAvg")}</span>
                <span>{t("beforeAfter.manualMin")}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  className="h-full rounded-full bg-destructive/50"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                <span>{t("beforeAfter.withBriefXtract")}</span>
                <span>{t("beforeAfter.fifteenMin")}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "10%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  className="h-full rounded-full bg-status-online"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── ROI Section ─────────────────────────────────────────────────────────────
const ROISection = ({ onRequestDemo }: { onRequestDemo: () => void }) => {
  const { t } = useTranslation();
  const [counselors, setCounselors] = useState(10);
  const [clientsPerWeek, setClientsPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(20);

  const HOURS_SAVED_PER_CASE = 3.75; // 4h manual − 0.25h with BriefXtract
  const WEEKS_PER_YEAR = 48;

  const hoursSavedPerWeek = Math.round(
    counselors * clientsPerWeek * HOURS_SAVED_PER_CASE,
  );
  const hoursSavedPerYear = hoursSavedPerWeek * WEEKS_PER_YEAR;
  const eurosSaved = hoursSavedPerYear * hourlyRate;

  const fmt = (n: number) => n.toLocaleString("de-DE");
  const fmtEur = (n: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const sliders = [
    {
      label: t("roi.calc_counselors"),
      value: counselors,
      min: 1,
      max: 50,
      step: 1,
      display: String(counselors),
      onChange: (v: number) => setCounselors(v),
      minLabel: "1",
      maxLabel: "50",
    },
    {
      label: t("roi.calc_clients"),
      value: clientsPerWeek,
      min: 1,
      max: 20,
      step: 1,
      display: String(clientsPerWeek),
      onChange: (v: number) => setClientsPerWeek(v),
      minLabel: "1",
      maxLabel: "20",
    },
    {
      label: t("roi.calc_hourly"),
      value: hourlyRate,
      min: 15,
      max: 50,
      step: 1,
      display: `€${hourlyRate}`,
      onChange: (v: number) => setHourlyRate(v),
      minLabel: "€15",
      maxLabel: "€50",
    },
  ];

  const outputs = [
    {
      label: t("roi.calc_hours_week"),
      value: fmt(hoursSavedPerWeek),
      unit: "h",
      highlight: false,
    },
    {
      label: t("roi.calc_hours_year"),
      value: fmt(hoursSavedPerYear),
      unit: "h / yr",
      highlight: false,
    },
    {
      label: t("roi.calc_savings"),
      value: fmtEur(eurosSaved),
      unit: "",
      highlight: true,
    },
  ];

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
            {t("roi.label")}
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl text-foreground leading-tight mb-4">
            <AnimatedWords text={t("roi.title")} delay={0.1} />
          </h2>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            {t("roi.subtitle")}
          </p>
        </motion.div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bento-card bento-card-frosted rounded-2xl p-8 mb-5"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — sliders */}
            <div className="flex flex-col gap-8">
              {sliders.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {s.label}
                    </label>
                    <span className="text-lg font-bold text-primary tabular-nums">
                      {s.display}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    value={s.value}
                    onChange={(e) => s.onChange(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground/50 mt-1.5">
                    <span>{s.minLabel}</span>
                    <span>{s.maxLabel}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground/50 leading-relaxed">
                {t("roi.calc_assumption")}
              </p>
            </div>

            {/* Right — output metrics */}
            <div className="flex flex-col gap-4">
              {outputs.map((o) => (
                <div
                  key={o.label}
                  className={`rounded-xl p-5 border ${
                    o.highlight
                      ? "bg-primary/10 border-primary/20"
                      : "bg-surface-1/60 border-foreground/10"
                  }`}
                >
                  <p className="text-xs text-muted-foreground mb-1.5">
                    {o.label}
                  </p>
                  <p
                    className={`text-4xl font-bold tabular-nums ${o.highlight ? "text-primary" : "text-foreground"}`}
                  >
                    {o.value}
                  </p>
                  {o.unit && (
                    <p className="text-xs text-muted-foreground/50 mt-1">
                      {o.unit}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Disclaimer + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 bento-card bento-card-frosted rounded-xl"
        >
          <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-lg">
            {t("roi.disclaimer")}
          </p>
          <button
            onClick={onRequestDemo}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/40 shrink-0"
          >
            {t("roi.ctaDemo")}
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // small delay lets images/video/motion elements settle their layout
    // before we measure the target position, avoiding a jumpy scroll
    const timeout = setTimeout(() => smoothScrollToId(id), 120);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <div className="grain-overlay min-h-screen bg-background">
      <Header />
      <Hero onRequestDemo={() => setDemoOpen(true)} />
      <StatsBar />
      <ProblemPage />
      <BeforeAfter />
      <ROISection onRequestDemo={() => setDemoOpen(true)} />
      <Footer />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;