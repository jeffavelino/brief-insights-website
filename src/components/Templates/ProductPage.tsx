import { motion } from "framer-motion";
import { ScanText, ShieldCheck, FileWarning, Workflow, Zap, Plug } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedWords from "../Atoms/AnimatedWords";
import { BentoCard } from "../BentoCard";
import { BentoGrid } from "../BentoGrid";


function ProductPage() {
  const { t } = useTranslation();

  const extractionRows = [
    { label: t("bentoMock.creditor"), value: "Vodafone GmbH", conf: "99%" },
    { label: t("bentoMock.amount"), value: "€ 847.30", conf: "98%" },
    { label: t("bentoMock.fileNo"), value: "RIV-2024-88412", conf: "97%" },
    { label: t("bentoMock.dueDate"), value: "15 Jan 2025", conf: "96%" },
  ];

  const caseDocuments = [
    { label: t("bentoMock.doc1"), linked: true },
    { label: t("bentoMock.doc2"), linked: true },
    { label: t("bentoMock.doc3"), linked: false },
  ];

  return (
    <section id="product" className="bg-section-blue px-6 py-24">
      <div className="max-w-6xl mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4"
        >
          {t("features.label")}
        </motion.p>
        <h2 className="font-serif italic text-5xl md:text-6xl text-foreground leading-tight">
          <AnimatedWords
            text={t("features.title1")}
            className="block"
            delay={0.1}
          />
          <AnimatedWords
            text={t("features.title2")}
            className="block text-foreground/50"
            delay={0.3}
          />
        </h2>
      </div>

      <BentoGrid>
        <BentoCard
          title={t("features.extraction")}
          description={t("features.extractionDesc")}
          icon={ScanText}
          colSpan={2}
          className="bento-card-frosted"
        >
          <div className="h-32 rounded-lg bg-surface-3/50 border border-border/50 p-4 font-mono text-xs text-muted-foreground space-y-2 overflow-hidden">
            {extractionRows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between"
              >
                <span className="text-muted-foreground/60 w-24 shrink-0">
                  {row.label}
                </span>
                <span className="text-foreground flex-1">{row.value}</span>
                <span className="text-status-online">{row.conf}</span>
              </motion.div>
            ))}
          </div>
        </BentoCard>

        <BentoCard
          title={t("features.gdpr")}
          description={t("features.gdprDesc")}
          icon={ShieldCheck}
          className="bento-card-frosted"
        />

        <BentoCard
          title={t("features.urgency")}
          description={t("features.urgencyDesc")}
          icon={FileWarning}
          className="bento-card-frosted"
        />

        <BentoCard
          title={t("features.caseEngine")}
          description={t("features.caseEngineDesc")}
          icon={Workflow}
          colSpan={2}
          className="bento-card-frosted"
        >
          <div className="h-20 rounded-lg bg-surface-3/50 border border-border/50 flex items-center px-4 gap-3 flex-wrap">
            {caseDocuments.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-2 border border-border/50 text-xs text-muted-foreground"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${item.linked ? "bg-status-online" : "bg-primary"}`}
                />
                {item.label}
              </div>
            ))}
            <div className="text-xs text-muted-foreground/50 ml-auto">
              {t("bentoMock.masterCase")}
            </div>
          </div>
        </BentoCard>

        <BentoCard
          title={t("features.faster")}
          description={t("features.fasterDesc")}
          icon={Zap}
          className="bento-card-frosted"
        />

        <BentoCard
          title={t("features.vivendi")}
          description={t("features.vivendiDesc")}
          icon={Plug}
          className="bento-card-frosted"
        />
      </BentoGrid>
    </section>
  );
}

export default ProductPage;
