import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '1 Bedrooms',
    other_apt: 10000,
    current_apt: 0,
    amt: 0,
  },
  {
    name: '2 Bedrooms',
    other_apt: 22000,
    current_apt: 27000,
    amt: 27000,
  },
  {
    name: '3 Bedrooms',
    other_apt: 35000,
    current_apt: 0,
    amt: 0,
  },
  {
    name: '4+ Bedrooms',
    other_apt: 43000,
    current_apt: 0,
    amt: 0,
  },
];

const MarketPriceGraph = () => {
  return (
    <AreaChart
      width={340}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#ed0909' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#ed0909' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='other_apt'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorUv)'
      />
      <Area
        type='monotone'
        dataKey='current_apt'
        stroke='#ed0909'
        fillOpacity={1}
        fill='url(#colorPv)'
      />
    </AreaChart>
  );
};

export default MarketPriceGraph;