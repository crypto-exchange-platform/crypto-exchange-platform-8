
import  { FC } from 'react';
import { motion } from 'framer-motion';

interface NewsItem {
  id: string;
  pair: string;
  title: string;
  time: string;
  date: string;
  author: string;
  snippet: string;
  imageUrl: string;
}

const sampleNews: NewsItem[] = [
  {
    id: '1',
    pair: 'EUR/USD',
    title: 'Euro Gains on Factory Surge',
    time: '2h ago',
    date: 'Jun 21, 2025',
    author: 'Jane Doe',
    snippet: 'Germany boosts euro with stronger manufacturing output.',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=400&h=240'
  },
  {
    id: '2',
    pair: 'GBP/USD',
    title: 'Pound Dips on BOE Caution',
    time: '4h ago',
    date: 'Jun 21, 2025',
    author: 'John Smith',
    snippet: 'Bank of England’s cautious tone weighs on the pound.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=240'
  },
  {
    id: '3',
    pair: 'USD/JPY',
    title: 'Yen Falls on Yield Spike',
    time: '6h ago',
    date: 'Jun 20, 2025',
    author: 'Alex Kim',
    snippet: 'U.S. yield highs push yen to multi-month lows.',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&h=240'
  }
];

export const ForexNewsSection: FC = () => (
  <section id="forex" className="py-12 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">
        Forex News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {sampleNews.map((item, i) => (
          <motion.div
            key={item.id}
            className="relative rounded-3xl overflow-hidden min-h-[30rem] shadow-lg"
            whileHover={{ scale: 1.03, rotateX: 8, rotateY: -8 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}>
              <div className="w-full h-full bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="relative z-10 bg-[#111827] p-6 flex flex-col h-full">
              <span className="self-start text-xs text-blue-400 bg-blue-900 px-3 py-1 rounded-lg mb-3 transform -skew-x-12">
                {item.pair}
              </span>
              <h3 className="text-xl text-white font-bold mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm flex-1 mb-4">
                {item.snippet}
              </p>
              <div className="text-gray-500 text-xs mb-2">
                <span>{item.date}</span> • <span>{item.author}</span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {item.time}
                </span>
                <button className="text-blue-200 text-xs px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-600 transition">
                  Read More
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-blue-500 to-indigo-500 opacity-50 animate-pulse mix-blend-screen" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
 