import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: #f5f6fa;
`;

interface ChartProps {
  coinId: string;
  priceData?: PriceData;
  isLoading: boolean;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId, priceData, isLoading }: ChartProps) {
  const lastUpdatedTime = priceData?.last_updated;
  const changeRate = priceData?.quotes.USD.market_cap_change_24h;
  const price = priceData?.quotes.USD.price;
  let isNegative = undefined;
  if (changeRate !== undefined && changeRate < 0) {
    isNegative = true;
  } else if (changeRate == 0) {
    isNegative = undefined;
  } else {
    isNegative = false;
  }

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          <Card>
            <Subtitle>Last updated:</Subtitle>
            <Subtitle>{lastUpdatedTime}</Subtitle>
          </Card>
          <Card>
            <Subtitle>Price:</Subtitle>
            <Subtitle>
              {price}
              <span>
                ({changeRate}%
                {isNegative === undefined ? null : isNegative ? (
                  <FontAwesomeIcon icon={faArrowDown} color="#e84118" />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} color="#4cd137" />
                )}
                )
              </span>
            </Subtitle>
          </Card>
        </>
      )}
    </>
  );
}

export default Price;
