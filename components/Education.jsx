import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

function Education() {
  return (
    <motion.section
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full p-8 mt-10"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-bgSecondaryDark dark:bg-bgSecondaryLight p-6 rounded-2xl shadow-md shadow-primary border border-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎓</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold dark:text-ctnPrimaryDark text-ctnPrimaryLight mb-2">
                Marathwada Mitra Mandal's College of Engineering, Pune
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <p className="dark:text-ctnSecondaryDark text-ctnSecondaryLight font-semibold">
                  B.E. in Information Technology
                </p>
                <span className="hidden md:inline text-ctnSecondaryDark dark:text-ctnSecondaryLight">•</span>
                <p className="dark:text-ctnSecondaryDark text-ctnSecondaryLight">
                  2022 - 2026
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  CGPA: 8.86
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;
