import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { achievements } from "@/constants";

function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-bgSecondaryDark dark:bg-bgSecondaryLight p-6 rounded-2xl shadow-md shadow-primary hover:shadow-tertiary transition-all duration-300 hover:-translate-y-2 border border-primary/20"
    >
      <div className="flex items-start gap-4">
        <div className="text-5xl">{achievement.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold dark:text-ctnPrimaryDark text-ctnPrimaryLight mb-2">
            {achievement.title}
          </h3>
          <p className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Achievements() {
  return (
    <motion.section className="w-full p-8 mt-20" id="achievements">
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>My accomplishments</p>
        <h2 className={`sectionHeadText text-center`}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Achievements;
