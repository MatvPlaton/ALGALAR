import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
// Импортируйте необходимые модули из Chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    Plugin,
  } from 'chart.js';

// Регистрируем модули, чтобы Chart.js мог их использовать
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
    data: ChartData<'bar'>;
    options?: ChartOptions<'bar'>;
  }
  
  // Плагин для отображения значений внутри столбцов
  const barValuePlugin: Plugin<'bar'> = {
    id: 'barValuePlugin',
    afterDatasetsDraw: (chart) => {
      const { ctx, chartArea} = chart;
      const meta = chart.getDatasetMeta(0); // Берем первый набор данных
      const dataset = chart.data.datasets[0].data as number[];
  
      ctx.save();
      ctx.fillStyle = 'white'; // Цвет текста
      ctx.font = 'bold 2vw RobotoBold'; // Шрифт текста
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
  
      meta.data.forEach((bar, index) => {
        const value = dataset[index];
        if (typeof value === 'number') {
          const x = bar.x; // Координата x центра столбца
          const y = bar.y + (chartArea.bottom - bar.y) / 2; // Центр столбца по вертикали
          ctx.fillText(value.toString(), x, y);
        }
      });
  
      ctx.restore();
    },
  };

  const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
    return (
      <Bar
        data={data}
        options={{
          ...options,
          plugins: {
            ...options?.plugins,
          },
        }}
        plugins={[barValuePlugin]} // Подключаем наш плагин
      />
    );
  };
const Wrapper = styled.div`
    position: absolute;
    width: 40%;
    height: 50%;
    left: 50%;
    top: 10%;
`
const HeaderWrapper = styled.div`
    font-family: RobotoRegular, sans-serif;
    font-size: 1.2vw;
    position: relative;
    top: -5%;
`

const App1 = () => {
    const data = {
      labels: ['Иванов', 'Смирнов', 'Петров'],
      datasets: [
        {
            
          data: [8, 2, 4],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          backgroundColor: (context: any) => {
            // Получаем текущий индекс столбца
            const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400); 
            
            // Устанавливаем цвета градиента
            gradient.addColorStop(0, '#43C5E2');   
            gradient.addColorStop(1, '#5A5CA8'); 
            
            return gradient; 
          },
          borderWidth: 0,
          width: 0.1,
        },
      ],
    };
  
    const options = {
    
      responsive: true,
      plugins: {
        legend: {
            display: false
        }
      },
      barPercentage: 0.3,
      scales: {
        x: {
          grid: {
            display: false, // Убираем сетку для оси Y
          }
        },
        y: {
          grid: {
            display: false, // Убираем сетку для оси Y
          },
        beginAtZero: true, 
        title: {
        display: true, 
        text: 'Количество поломок', 
      },
      
      ticks: {
        
        callback: function () {
          return ''; 
        },
      },
        },
      },
    };
  
    return (
      <Wrapper>
        <HeaderWrapper>Статистика по водителям за год</HeaderWrapper>
        <BarChart data={data} options={options} />
      </Wrapper>
    );
  };
  
  export default App1;