import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <section className="py-16 dark:bg-[#7f7f7f] md:py-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-bold uppercase tracking-wider bg-gradient-to-r from-gray-dark via-yellow to-gray-dark bg-clip-text text-transparent dark:from-white dark:via-[#919191] dark:to-white md:text-5xl"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {t("about_me.title")}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center gap-12 px-6 pb-10 md:flex-row md:gap-16 md:px-12 md:pb-0 lg:gap-20 lg:px-20"
      >
        <motion.div variants={itemVariants} className="text-center md:w-1/3">
          <motion.div
            className="group inline-block rounded-2xl bg-white p-6 pb-8 shadow-card transition-all duration-300 hover:shadow-card-hover dark:bg-[#6d6d6d]"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={`images/${t("about_me.image")}`}
              alt="Profile"
              className="mx-auto h-auto w-[220px] rounded-xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 md:w-[240px]"
              whileHover={{ rotate: [0, -2, 2, -2, 0] }}
              transition={{ duration: 0.5 }}
            />
            <div className="mt-6 flex justify-evenly gap-2">
              {t("about_me.tech_stacks", { returnObjects: true })?.map(
                (tech: string, index: number) => (
                  <motion.div
                    key={tech}
                    custom={index}
                    variants={techStackVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon
                      icon={tech}
                      className="transition-all duration-300 hover:drop-shadow-lg"
                      style={{
                        fontSize: 50,
                      }}
                    />
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:w-2/3">
          <motion.div
            className="overflow-hidden rounded-xl border border-[rgba(0,0,0,.125)] bg-white shadow-lg dark:bg-[#6d6d6d]"
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-gradient-to-r from-[rgba(0,0,0,0.03)] to-[rgba(0,0,0,0.01)] px-4 py-3 dark:from-[rgba(255,255,255,0.05)] dark:to-[rgba(255,255,255,0.02)]">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon="emojione:red-circle" width={12} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
              >
                <Icon icon="twemoji:yellow-circle" width={12} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
              >
                <Icon icon="twemoji:green-circle" width={12} />
              </motion.div>
            </div>
            <motion.div
              className="px-6 py-8 text-justify leading-relaxed md:px-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                className="mb-6 block text-3xl font-bold bg-gradient-to-r from-yellow via-[#d4a574] to-yellow bg-clip-text text-transparent dark:from-[#919191] dark:via-white dark:to-[#919191] md:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t("about_me.greeting")} 👋
              </motion.span>

              <motion.div
                className="text-justify leading-loose"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <p className="text-lg font-semibold text-gray-dark dark:text-white mb-4 md:text-xl">
                  <span className="text-yellow dark:text-[#919191]">👋 I'm Mohamed</span>, a dynamic and results-driven Software Developer and Technical Data Analyst with a strong foundation in data visualization, statistical analysis, and business intelligence.
                </p>
                
                <p className="text-base text-gray-dark dark:text-gray-light mb-4 md:text-lg">
                  I excel at transforming raw data into clear, actionable insights that drive strategic decisions across finance, healthcare, banking, and telecom sectors. My expertise includes developing full-stack applications using <span className="font-semibold text-yellow dark:text-[#919191]">React.js, Spring Boot, Docker, Kubernetes, and AWS</span>, while building scalable cloud-native and agentic AI solutions using <span className="font-semibold text-yellow dark:text-[#919191]">LangChain, Theta Edge Cloud, and Gradio</span>.
                </p>
                
                <p className="text-base text-gray-dark dark:text-gray-light mb-4 md:text-lg">
                  I'm proficient in <span className="font-semibold text-yellow dark:text-[#919191]">SQL, Python, Excel, and BI tools such as Power BI and Tableau</span>, with a knack for creating compelling data dashboards. I specialize in designing Agentic AI workflows, building robust APIs, implementing efficient CI/CD pipelines, and enhancing system performance for complex enterprise projects.
                </p>
                
                <p className="text-base text-gray-dark dark:text-gray-light mb-4 md:text-lg">
                  I hold a Masters of Science in Information Systems from New Jersey Institute of Technology, and a Bachelors in Computer Science and Engineering from Government College of Technology, Tamil Nadu.
                </p>
                
                <motion.p 
                  className="text-base font-semibold text-yellow dark:text-[#919191] md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  For detailed information about my experience and projects, please refer to my LinkedIn profile.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
