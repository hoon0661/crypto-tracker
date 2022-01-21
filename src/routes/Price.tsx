import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

function Price({ coinId }: ChartProps) {
  return <h1>Price</h1>;
}

export default Price;
