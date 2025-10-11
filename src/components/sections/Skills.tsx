import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1f1f1f] px-4 py-16 pb-20 md:px-8 md:py-20"
      ref={ref}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-yellow blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 top-3/4 h-96 w-96 rounded-full bg-[#919191] blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="relative mb-16 text-center text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
      >
        {t("skills.title")}
      </motion.h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto flex max-w-6xl flex-wrap justify-center gap-5 md:gap-6"
      >
        {t("skills.icons", { returnObjects: true }).map((skill: any) => (
          <motion.li
            key={skill.name}
            variants={itemVariants}
            className="group relative flex h-[100px] w-[110px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#2A2929] to-[#1f1f1f] p-3 text-white shadow-lg transition-all duration-300 hover:shadow-2xl md:h-[110px] md:w-[120px]"
            whileHover={{
              scale: 1.1,
              y: -10,
              boxShadow:
                "0 20px 40px rgba(233, 213, 161, 0.2), 0 0 20px rgba(233, 213, 161, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            <motion.div
              className="relative z-10"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                icon={skill.class}
                className="mx-auto drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
                width="48px"
                height="48px"
              />
            </motion.div>

            <motion.p
              className="relative z-10 mt-3 text-center text-xs font-medium transition-colors duration-300 group-hover:text-yellow md:text-sm"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {skill.name}
            </motion.p>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.li>
        ))}
      </motion.ul>

      {/* Bottom decorative wave */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.05, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-yellow to-transparent"
      />
    </section>
  );
};

export default Skills;
