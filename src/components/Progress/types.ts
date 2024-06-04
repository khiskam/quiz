export type ProgressProps = {
  current: number;
  done: number;
  total: number;

  onPage: (idx: number) => void;
};
