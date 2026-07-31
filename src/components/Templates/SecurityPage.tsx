import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Landmark,
  Server,
  ShieldCheck,
  Trash2,
  Lock,
  CheckCheck,
} from "lucide-react";
import AnimatedWords from "../Atoms/AnimatedWords";

function SecurityPage() {
  const { t } = useTranslation();

  const credentials = [
    {
      icon: ShieldCheck,
      title: t("security.gdprTitle"),
      desc: t("security.gdprDesc"),
    },
    {
      icon: Server,
      title: t("security.hostingTitle"),
      desc: t("security.hostingDesc"),
    },
    {
      icon: Trash2,
      title: t("security.retentionTitle"),
      desc: t("security.retentionDesc"),
    },
    {
      icon: Landmark,
      title: t("security.churchTitle"),
      desc: t("security.churchDesc"),
    },
    {
      icon: Lock,
      title: t("security.encryptionTitle"),
      desc: t("security.encryptionDesc"),
    },
    {
      icon: Building2,
      title: t("security.infraTitle"),
      desc: t("security.infraDesc"),
    },
  ];

  const badges = [
    "GDPR / DSGVO",
    "AWS · EU Hosted",
    "KDG",
    "DSG-EKD",
    "Zero Retention",
    t("security.tlsBadge"),
  ];

  return (
    <section id="security" className="bg-section-blue px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
            {t("security.label")}
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl text-foreground leading-tight mb-4 max-w-2xl">
            <AnimatedWords text={t("security.title")} delay={0.1} />
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            {t("security.subtitle")}
          </p>
        </motion.div>

        {/* Trust badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {badges.map((badge) => (
            //componentizar as badges
            <div
              key={badge}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/15 bg-background/60 backdrop-blur-sm text-xs font-medium text-foreground/70"
            >
              <CheckCheck className="h-3 w-3 text-status-online shrink-0" />
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Credential grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((cred, i) => (
            //componentizar os cards das credenciais
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bento-card bento-card-frosted rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="flex h-55 w-55 items-center justify-center rounded-lg bg-primary/10">
                <cred.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-snug">
                {cred.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cred.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityPage;
