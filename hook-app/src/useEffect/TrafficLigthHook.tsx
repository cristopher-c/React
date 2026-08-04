import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightHook = () => {

  const {countdown, light, colors, percentage} = useTrafficLight();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-xl font-thin text-white">
          Semaforo con useEffect
        </h1>
        <h2 className="text-gray-500 dark:text-gray-400">
          Countdown {countdown}
        </h2>

        <div className="w-64 bg-gray-600 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}` }}
          ></div>
        </div>

        <div className={`w-32 h-32 ${
            light === 'red' 
            ? colors[light] 
              : 'bg-gray-500'
          } rounded-full`}></div>
        <div className={`w-32 h-32 ${
            light === 'yellow' 
            ? colors[light] 
              : 'bg-gray-500'
          } rounded-full`}></div>
        <div className={`w-32 h-32 ${
            light === 'green' 
            ? colors[light] 
              : 'bg-gray-500'
          } rounded-full`}></div>
      </div>
    </div>
  );
};