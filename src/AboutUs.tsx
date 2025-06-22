
import  { FC } from 'react';
import { motion } from 'framer-motion';

export const AboutUsSection: FC = () => (
  <section id="about" className="py-12 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-200 mb-8 text-center">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Card */}
        <motion.div
          className="bg-[#0f172a] p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Mission</h3>
          <p className="text-blue-400 leading-relaxed">
            We aim to democratize crypto trading by providing cutting-edge tools,
            insightful analytics, and a secure platform for every level of trader.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="bg-[#0f172a] p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Vision</h3>
          <p className="text-blue-400 leading-relaxed">
            To lead the future of finance by making blockchain and crypto assets
            accessible, transparent, and innovative for all.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#0f172a] p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-blue-400 leading-relaxed space-y-2">
            <li>Integrity: Upholding honesty and transparency.</li>
            <li>Innovation: Pioneering advanced trading technologies.</li>
            <li>Community: Building trust through collaboration.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);
 