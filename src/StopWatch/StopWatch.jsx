import { useDispatch, useSelector } from 'react-redux';
import {
  increaseHours,
  increaseMinites,
  increaseSeconds,
  resetAll,
  setHours,
  setMinites,
  setSeconds,
  updateStatus,
} from './stopWatchSlice';
import { useEffect, useRef } from 'react';

export default function StopWatch() {
  const intervalRef = useRef(null);

  const { hours, minites, seconds, status } = useSelector(
    state => state.stopWatch
  );

  const dispatch = useDispatch();

  const handleStart = function () {
    const intervalId = setInterval(() => dispatch(increaseSeconds()), 100);
    intervalRef.current = intervalId;
    dispatch(updateStatus('running'));
  };

  const handleReset = function () {
    dispatch(resetAll());
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    dispatch(updateStatus('idle'));
  };

  const handlePause = function () {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    dispatch(updateStatus('idle'));
  };

  useEffect(() => {
    if (seconds == 60) {
      dispatch(increaseMinites());
      dispatch(setSeconds());
    } else if (minites == 60) {
      dispatch(increaseHours());
      dispatch(setMinites());
    } else if (hours == 12) {
      dispatch(setHours());
    }
  }, [seconds, minites, hours]);

  return (
    <div className="flex gap-5 m-10 justify-center">
      <div className="space-y-3">
        <p className="watch">{hours.toString().padStart(2, '0')}</p>
        <button
          className="btn"
          onClick={() => {
            status == 'idle' ? handleStart() : null;
          }}
        >
          Start
        </button>
      </div>
      <p className="text-stone-200 font-bold text-3xl h-full py-2">:</p>
      <div className="space-y-3">
        <p className="watch">{minites.toString().padStart(2, '0')}</p>
        <button className="btn" onClick={handlePause}>
          Pause
        </button>
      </div>
      <p className="text-stone-200 font-bold text-3xl h-full py-2">:</p>
      <div className="space-y-3">
        <p className="watch">{seconds.toString().padStart(2, '0')}</p>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
