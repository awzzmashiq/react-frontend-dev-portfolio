import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="relative h-[100vh] min-h-[650px] w-[100%] overflow-hidden bg-gradient-to-br from-yellow via-[#f0e0b8] to-yellow dark:from-[#494949] dark:via-[#3a3a3a] dark:to-[#494949]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#d4a574] opacity-20 blur-3xl dark:bg-[#919191]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#d4a574] opacity-20 blur-3xl dark:bg-[#6d6d6d]"
            animate={{
              x: [0, -50, 0],
              y: [0, -100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="animate-float"
          >
            <Icon
              className="text-gray-dark drop-shadow-2xl dark:text-white"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-5xl font-bold text-gray-dark drop-shadow-lg dark:text-white md:text-6xl"
          >
            {t("basic_info.name")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="min-h-[80px] text-center"
          >
            <TypeAnimation
              sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
                (title: string) => [title, 1000],
              )}
              wrapper="span"
              speed={50}
              className="text-2xl font-medium text-gray-dark dark:text-gray-light md:text-3xl"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="mt-4"
          >
            <Switch
              checked={darkTheme}
              onChange={toggleTheme}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto shadow-lg"
              width={90}
              height={40}
              uncheckedIcon={
                <Icon
                  className="ml-5 h-full text-end text-[25px] text-gray-dark"
                  icon="twemoji:owl"
                />
              }
              checkedIcon={
                <Icon
                  className="ml-5 h-full text-end text-[25px] text-gray-dark"
                  icon="noto-v1:sun-with-face"
                />
              }
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-8"
          >
            <Icon
              icon="mdi:chevron-down"
              className="text-4xl text-gray-dark dark:text-white"
            />
          </motion.div>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex justify-center gap-6 bg-gradient-to-r from-yellow via-[#f0e0b8] to-yellow py-6 shadow-lg dark:from-[#494949] dark:via-[#3a3a3a] dark:to-[#494949]"
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] transition-all duration-300",
              i18n.language === "en"
                ? "brightness-50 drop-shadow-lg"
                : "opacity-70 hover:opacity-100",
            )}
            icon="twemoji-flag-for-flag-united-kingdom"
            onClick={() => i18n.changeLanguage("en")}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon
            className={clsx(
              "h-full cursor-pointer text-[50px] transition-all duration-300",
              i18n.language === "pl"
                ? "brightness-50 drop-shadow-lg"
                : "opacity-70 hover:opacity-100",
            )}
            icon="twemoji-flag-for-flag-poland"
            onClick={() => i18n.changeLanguage("pl")}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
