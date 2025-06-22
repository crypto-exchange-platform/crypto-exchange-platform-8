
import  { FC } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';
import useSparkles from './hooks/ModalWithSparkles';

interface DataPoint { time: string; value: number; }

const sampleData: DataPoint[] = [
  { time: 'Jan', value: 400 },
  { time: 'Feb', value: 450 },
  { time: 'Mar', value: 480 },
  { time: 'Apr', value: 530 },
  { time: 'May', value: 520 },
  { time: 'Jun', value: 580 },
  { time: 'Jul', value: 600 }
];

export const StarSparkleChartSection: FC = () => {
  const sparkles = useSparkles(100);

  return (
    <section id="stars-chart" className="relative w-full h-full bg-black overflow-hidden">
      <div className="sparkles-container">{sparkles}</div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        <h2 className="text-4xl text-blue-200 font-bold text-center mb-4">
          Performance Over Time
        </h2>
        <div className="bg-[#0f172a] p-8 rounded-3xl shadow-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="time" tick={{ fill: '#38bdf8' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '0.5rem' }} itemStyle={{ color: '#38bdf8' }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ r: 4, fill: '#0f172a', stroke: '#38bdf8', strokeWidth: 2 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-center text-blue-300 space-y-2 font-bold">
          <p>
            The chart above illustrates monthly growth trends in our key metric,
            showcasing steady increases from January through July.
          </p>
          <p>
            Notice the seasonal uptick in April correlates with our major product launch,
            while slight dips in May reflect typical mid-year adjustments.
          </p>
          <p>
            Each spark represents a data point, and the cosmic sparkles
            overlay emphasizes our vision of boundless progress.
          </p>
        </div>
      </div>
    </section>
  );
};
 