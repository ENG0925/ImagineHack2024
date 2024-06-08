import React from 'react';
import './dashboard.css';

const ChartItem = ({ title, amount, rate }) => (
  <div className="div_con">
    <div>
      <p className="total_str">{title}</p>
      <p className="tol_ret_am">{amount}</p>
      <p className="div_rate">{rate}</p>
    </div>
  </div>
);

const Charts = () => {
  return (
    <>
      <section>
        <div className="div_container">
          <ChartItem title="Total returns" amount="$30,000" rate="+34.5%" />
          <ChartItem title="Total sales" amount="$30,000" rate="+34.5%" />
          <ChartItem title="Total subscriptions" amount="$30,000" rate="+34.5%" />
          <ChartItem title="Total returns" amount="$30,000" rate="+34.5%" />
        </div>
      </section>

      <section className="flex my-4 px-4 gap-3">
        <div className="w-full sm:w-1/2 h-[300px] bg-gray-700 rounded"></div>
        <div className="w-full sm:w-1/2 h-[300px] bg-gray-700 rounded"></div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className="w-full sm:w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className="w-full sm:w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className="w-full sm:w-1/3 h-[250px] bg-gray-700 rounded"></div>
      </section>
    </>
  );
};

export default Charts;
