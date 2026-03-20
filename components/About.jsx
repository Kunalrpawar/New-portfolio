import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Passionate Information Technology student and aspiring Software Engineer with hands-on experience in web development, AI/ML, and full-stack projects. Highly organized, proactive, and an effective communicator with a strong foundation in programming, problem-solving, software design, and collaborative teamwork. Enthusiastic about leveraging technical expertise to deliver innovative, scalable solutions and contribute to high-impact, growth-oriented development teams.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="w-fit break-words">
            <Link
              href="mailto:kunalrpawar04@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
            >
              <EmailIcon className="w-[30px] h-[30px]" />
                kunalrpawar04@gmail.com
            </Link>
          </div>
          <div className="w-fit break-words">
            <p className="flex items-center gap-2 text-ctnPrimaryLight dark:text-ctnSecondaryDark">
              <span className="text-xl">📱</span> +91 7499445758
            </p>
          </div>
        </div>
        
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}

export default About;
