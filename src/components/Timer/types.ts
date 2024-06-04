export type TimerProps = {
  initDuration: number; // in seconds

  onFinish: () => void;
  stop?: boolean;
};
