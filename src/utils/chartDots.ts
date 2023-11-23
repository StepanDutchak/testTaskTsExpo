import { detailsFitness } from "../constants/fitnessDetails";

export const chartData = {
  details: detailsFitness,
  labels: ["01-2021", "02-2021", "03-2021", "04-2021"],
  datasets: [
    {
      data: [64, 68, 50, 58],
      strokeWidth: 2,
      color: (index: number) => "#8E8E8E",
    },
  ],
};
