import React from "react";
import { motion } from "framer-motion";
import AnimatedWords from "@/components/Atoms/AnimatedWords";
import { useTranslation } from "react-i18next";
import digitalSolution from "@/assets/Gemini_Generated_Digital_Solution.png";
import { Mail } from "lucide-react";
import Header from "@/components/Organism/Header";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section id="about" className="bg-section-orange px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              {t("about.label")}
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl text-foreground leading-tight">
              <AnimatedWords text={t("about.title")} delay={0.1} />
            </h2>
          </motion.div>

          {/* Mission + contact row */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Left — Digital Solution image + mission text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card bento-card-frosted rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={digitalSolution}
                  alt="Counselor smiling, efficiently using BriefXtract on a tablet"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.mission")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.team")}
                </p>
              </div>
            </motion.div>

            {/* Right — Company facts + contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card bento-card-frosted rounded-xl p-8 flex flex-col justify-between gap-6"
            >
              <div className="divide-y divide-foreground/10">
                {[
                  {
                    label: t("about.stat1Label"),
                    value: t("about.stat1Value"),
                  },
                  {
                    label: t("about.stat2Label"),
                    value: t("about.stat2Value"),
                  },
                  {
                    label: t("about.stat3Label"),
                    value: t("about.stat3Value"),
                  },
                  {
                    label: t("about.stat4Label"),
                    value: t("about.stat4Value"),
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* <button
                onClick={onRequestDemo}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-primary/25"
              >
                {t("about.contact")}
                <ArrowRight className="h-4 w-4" />
              </button> */}
                <a
                  href={`mailto:${t("about.contactEmail")}`}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground/60 border border-foreground/20 px-5 py-2 rounded-lg hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t("about.contactEmail")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
