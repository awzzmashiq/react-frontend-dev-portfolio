import { useBoolean } from "@/hooks";
import ProjectDialog from "../dialog/ProjectDialog";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { ProjectType } from "@/i18n/config";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen.on();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-yellow via-[#f0e0b8] to-yellow px-4 py-16 dark:from-[#494949] dark:via-[#3a3a3a] dark:to-[#494949] md:px-8 md:py-20"
      ref={ref}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center text-3xl font-bold uppercase tracking-wider text-black dark:text-white md:text-4xl"
      >
        {t("projects.title")}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 md:gap-10"
      >
        {t("projects.projects", { returnObjects: true }).map(
          (item: ProjectType, index: number) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 dark:bg-[#6d6d6d]"
              onClick={() => handleProjectDetails(item)}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              custom={index}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.images[0]}
                  alt={item.title}
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              <div className="p-5">
                <motion.span
                  className="mb-3 inline-block rounded-full bg-gradient-to-r from-[#696969] to-[#4a4a4a] px-5 py-2 text-sm font-semibold text-white shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.startDate}
                </motion.span>

                <motion.p
                  className="mt-3 text-xl font-bold uppercase tracking-wide text-gray-dark transition-colors duration-300 group-hover:text-[#d4a574] dark:text-white dark:group-hover:text-[#f0e0b8]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.p>

                {/* Hover indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-light"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <span>View Details</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-gradient-to-br from-yellow to-[#d4a574] opacity-0 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-30 dark:from-[#919191] dark:to-[#6d6d6d]" />
            </motion.div>
          ),
        )}
      </motion.div>

      <ProjectDialog
        open={isOpen}
        onClose={setIsOpen.off}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
