/**
 * FooterSection.tsx
 * Modern dark footer with extra padding, animated buttons, and refined design.
 */
import  { FC, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const FooterSection: FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-black bg-gradient-to-t from-gray-900 text-gray-400">
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Newsletter */}
        <div className="space-y-6">
          <h3 className="text-3xl text-blue-300 font-bold">CryptoWave</h3>
          <p className="text-sm">
            Leading platform for next-gen crypto trading. Join our newsletter for exclusive insights.
          </p>
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm"
            >
              Thank you for subscribing!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-lg bg-[#1f2937] placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          )}
        </div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-blue-300 font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            {['About Us','#market','Features','Careers'].map((link) => (
              <li key={link}>
                <a href={link === '#' ? '#' : link.toLowerCase().replace(/ /g, '')} className="hover:text-white transition-colors">
                  {link.replace('#','Home')}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-blue-300 font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            {['Help Center','FAQ','Privacy Policy','Terms of Service'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g,'')}`} className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h4 className="text-blue-300 font-semibold mb-4">Connect</h4>
          <div className="flex space-x-6">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-blue-400 hover:text-white transition-colors text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-4">
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} CryptoWave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
 