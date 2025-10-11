import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1f1f1f] py-12 text-center text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-yellow blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Social Icons */}
        <motion.div
          className="mb-8 flex justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t("basic_info.socials", { returnObjects: true }).map(
            (social: any, index: number) => (
              <motion.a
                key={social.icon}
                href={social.url}
                custom={index}
                variants={socialVariants}
                whileHover={{
                  scale: 1.3,
                  rotate: 5,
                  color: "#e9d5a1",
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
                  whileHover={{ scale: 1.5 }}
                />
                <Icon icon={social.icon} className="relative z-10" width="28px" />
              </motion.a>
            ),
          )}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mx-auto mb-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Copyright */}
        <motion.p
          className="text-sm font-light tracking-wide text-gray-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t("copyright")} &copy; Mohamed
        </motion.p>

        {/* Animated decoration */}
        <motion.div
          className="mx-auto mt-6 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full bg-yellow"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Back to top indicator */}
        <motion.a
          href="#"
          className="mt-8 inline-block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="flex flex-col items-center text-xs text-gray-light transition-colors duration-300 hover:text-yellow"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon icon="mdi:chevron-up" width="24px" />
            <span className="mt-1">Back to Top</span>
          </motion.div>
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
