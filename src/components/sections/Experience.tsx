import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <motion.span
    className="inline-block rounded-xl bg-gradient-to-r from-yellow to-[#d4a574] px-3 py-1 text-sm font-medium shadow-sm dark:from-[#919191] dark:to-[#6d6d6d] dark:text-white"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    {text}
  </motion.span>
);

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-yellow via-[#f0e0b8] to-yellow px-4 py-16 pb-20 dark:from-[#494949] dark:via-[#3a3a3a] dark:to-[#494949] md:px-8 md:py-20"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-[#d4a574] blur-3xl dark:bg-[#6d6d6d]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="relative mb-16 text-center text-3xl font-bold uppercase tracking-wider text-gray-dark dark:text-white md:text-4xl"
      >
        {t("experience.title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <VerticalTimeline lineColor="rgba(233, 213, 161, 0.4)">
          {t("experience.experiences", { returnObjects: true }).map(
            (exp: any, index: number) => (
              <VerticalTimelineElement
                key={exp.title}
                date={exp.years}
                dateClassName="!font-semibold dark:text-white"
                iconClassName="!bg-gradient-to-br from-[#AE944F] to-[#8a7540] !text-white dark:!from-[#919191] dark:!to-[#6d6d6d] !shadow-lg"
                icon={<Icon icon={exp.mainTechIcon} />}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  borderRadius: "1rem",
                  border: "2px solid rgba(233, 213, 161, 0.3)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.9)",
                }}
                className="dark:brightness-90 dark:filter"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="mb-3">
                    <Badge text={exp.mainTech} />
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-gray-dark md:text-2xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.title}
                  </motion.h3>

                  <motion.h4
                    className="mt-1 text-lg font-semibold text-gray md:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.company}
                  </motion.h4>

                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.technologies.map((tech: string) => (
                      <Badge key={tech} text={tech} />
                    ))}
                  </motion.div>
                </motion.div>
              </VerticalTimelineElement>
            ),
          )}
          <VerticalTimelineElement
            iconClassName="!bg-gradient-to-br from-[#AE944F] to-[#8a7540] !text-white dark:!from-[#919191] dark:!to-[#6d6d6d] !shadow-lg"
            icon={
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Icon icon="eos-icons:hourglass" />
              </motion.div>
            }
          />
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;
