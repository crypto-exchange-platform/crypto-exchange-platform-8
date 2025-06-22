import  {
  FC,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  ReactNode,
  CSSProperties,
} from "react";

const useSparkles = (count: number): ReactNode[] => {
  const [sparkles, setSparkles] = useState<ReactNode[]>([]);
  useEffect(() => {
    const items = Array.from({ length: count }).map((_, i) => {
      const style: CSSProperties = {
        position: "absolute",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1.5 + Math.random() * 2}s`,
      };
      return <div key={i} className="sparkle" style={style} />;
    });
    setSparkles(items);
  }, [count]);
  return sparkles;
};
export default useSparkles;
 