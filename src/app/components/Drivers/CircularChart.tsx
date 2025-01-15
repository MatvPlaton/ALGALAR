import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
// Регистрируем компоненты Chart.js
Chart.register(...registerables);

interface CircularChartProps {
  value: number; // Значение от 0 до 10
  index: number;
}
const chooseColor = (rating : number) => {
  switch (true) {
      case (rating < 3):
          return '#e52525';
      case (3 <= rating && rating < 5):
          return '#da8d00';
      case (5 <= rating && 8 <= rating):
          return '#00BB00';
      default:
          return '#000000cedc'
  }
}
const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 70%;
  width: 15vw;
  height: 15vw;

`
const Value = styled.div`
  position: relative;
  top: -60%;
  left: 20%;
  font-size: 2vw;

`

const CircularChart: React.FC<CircularChartProps> = ({ value,index }) => {

  const [currValue, setCurrValue] = useState(0);

  useEffect(() => setCurrValue(value),[value])

  const maxDivisions = 10;

  // Определяем данные для круговой диаграммы
  const data = {
    labels: ['Заполненная часть', 'Оставшаяся часть'],
    datasets: [
      {
        data: [value, maxDivisions - value], // Заполненная часть и оставшаяся часть
        backgroundColor: [chooseColor(value), '#dedede'],
        borderRadius: [20, 0],
      },
    ],
  };

  // Опции графика
  const options = {
    cutout: '80%',
    responsive: true,
    plugins: {
      legend: {
        display: false, // Выключить отображение легенды
      },
      showTooltips: true,
      tooltip: {
        
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (tooltipItem : any) => {
            const percentage = ((tooltipItem.raw / maxDivisions) * 100).toFixed(2);
            return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <> 
    {index != -1 ? 
    <Wrapper>
      <Doughnut data={data} options={options} />

      <Value> <h3 style={{position: 'relative', left: '14%', color: chooseColor(currValue)}}>{currValue}/{maxDivisions}</h3>  </Value>
     
    </Wrapper> : <div />} </>
  );
};

export default CircularChart;