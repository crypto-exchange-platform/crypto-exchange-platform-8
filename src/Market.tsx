
import  { FC } from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import CountUp from 'react-countup';

interface MarketItem {
  id: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  sparkline: number[];
}

const sampleData: MarketItem[] = [
  {
    id: 'btc', symbol: 'BTC', price: 60000, change24h: 2.5,
    marketCap: 1_100_000_000_000, volume24h: 35_000_000_000, circulatingSupply: 18_900_000,
    sparkline: [58000,59000,60000,61000,60500,60000]
  },
  {
    id: 'eth', symbol: 'ETH', price: 4000, change24h: -1.2,
    marketCap: 480_000_000_000, volume24h: 22_000_000_000, circulatingSupply: 120_000_000,
    sparkline: [4100,4050,4000,3950,3980,4000]
  },
  {
    id: 'ada', symbol: 'ADA', price: 2.15, change24h: 0.8,
    marketCap: 70_000_000_000, volume24h: 1_800_000_000, circulatingSupply: 33_000_000_000,
    sparkline: [2.0,2.1,2.15,2.2,2.18,2.15]
  },
  {
    id: 'sol', symbol: 'SOL', price: 150, change24h: 3.4,
    marketCap: 60_000_000_000, volume24h: 3_500_000_000, circulatingSupply: 300_000_000,
    sparkline: [140,145,150,155,152,150]
  }
];

export const MarketSection: FC = () => (
  <section id="market" className="py-12 bg-black">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-200 mb-8 text-center">
        Market Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sampleData.map(item => {
          const isUp = item.change24h >= 0;
          const sparkColor = isUp ? '#38bdf8' : '#1e3a8a';
          const data = item.sparkline.map(v => ({ value: v }));

          return (
            <div
              key={item.id}
              className="bg-[#0f172a] rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl text-blue-300 font-semibold text-center">
                {item.symbol}
              </h3>
              <div className="mt-2 flex items-baseline justify-center space-x-2">
                <span className="text-3xl text-blue-100 font-bold">
                  $<CountUp end={item.price} decimals={2} separator="," duration={1.5} />
                </span>
                <span className={`text-sm font-medium ${isUp ? 'text-blue-400' : 'text-blue-600'}`}>
                  {isUp ? '+' : '-'}{Math.abs(item.change24h).toFixed(2)}%
                </span>
              </div>
              <div className="mt-4 space-y-1 text-blue-400 text-xs text-center">
                <div>Cap: $<CountUp end={item.marketCap} separator="," duration={1.5} /></div>
                <div>Vol: $<CountUp end={item.volume24h} separator="," duration={1.5} /></div>
                <div>Supply: <CountUp end={item.circulatingSupply} separator="," duration={1.5} /></div>
              </div>
              <div className="mt-4 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={sparkColor}
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
 