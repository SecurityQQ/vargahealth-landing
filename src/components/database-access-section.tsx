import { motion } from "framer-motion";
import ShortInfoCardGrid from './grid-mock'; // Ensure the correct import path

export default function ContentSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Access to <span className="text-primary">Brogevity.com Database</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          AI aggregates all claims about life optimisation. Right now we have 2000 claims, and we add up to 500 new claims every week. You can use search and filters to explore longevity content by topic, expert, or solution type.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 md:px-6"
      >
        <div className="bg-card text-card-foreground rounded-lg overflow-hidden p-6">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            {"Discover \"hidden gems\" that work best for you"}
          </h3>
          <ShortInfoCardGrid />
        </div>
      </motion.div>
    </section>
  );
}
