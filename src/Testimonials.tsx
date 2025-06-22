
import  { FC } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number; 
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Alice Johnson',
    role: 'Day Trader',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80',
    rating: 4.5,
    quote: 'CryptoWave has transformed my trading—I see clear insights and lightning-fast charts!'
  },
  {
    id: 't2',
    name: 'Michael Lee',
    role: 'Fund Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80',
    rating: 5,
    quote: 'The UX is outstanding. The themed animations and sparkles make data come alive.'
  },
  {
    id: 't3',
    name: 'Sofia Martinez',
    role: 'Crypto Enthusiast',
    avatarUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=80&h=80',
    rating: 4,
    quote: 'I love the futuristic design—every section feels like a portal into the crypto world.'
  }
];

export const TestimonialsSection: FC = () => (
  <section id="testimonials" className="py-16 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-300 mb-12 text-center">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="bg-[#111827] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={t.avatarUrl}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-blue-500"
            />
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, idx) => {
                const key = `star-${t.id}-${idx}`;
                const filled = t.rating - idx;
                return filled >= 1 ? (
                  <FaStar key={key} className="text-blue-400" />
                ) : filled >= 0.5 ? (
                  <FaStarHalfAlt key={key} className="text-blue-400" />
                ) : (
                  <FaRegStar key={key} className="text-blue-400" />
                );
              })}
            </div>
            <p className="text-gray-300 italic mb-4 flex-1">“{t.quote}”</p>
            <div className="text-white font-semibold">{t.name}</div>
            <div className="text-blue-400 text-sm">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
 