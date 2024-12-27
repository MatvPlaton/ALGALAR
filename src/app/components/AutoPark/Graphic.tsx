// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// Регистрация компонентов Chart.js
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

// Типизация для данных точек
interface DataPoint {
    x: number;
    y: number;
}

// Пропсы компонента
interface LineChartProps {
    dataPoints: DataPoint[];
    max?: number;
}

const LineChart: React.FC<LineChartProps> = ({ max = 0, dataPoints }) => {
    // Подготовка данных для графика
    const data = {
        labels: [...Array(24).keys()].map(value => value + 1), // Метки оси X
        datasets: [
            {
                data: dataPoints.map((point) => ({
                    x: point.x,
                    y: point.y,
                })),
                borderColor: 'rgba(75, 192, 192, 1)', // Цвет линии
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Цвет под линией
                pointBorderColor: 'white', // Цвет точек
                pointBackgroundColor: 'purple', // Фон точек
                pointBorderWidth: 3,
                tension: 0, // Гладкость линии (0 = угловатая, 1 = сглаженная)
            },
        ],
    };

    // Опции для настройки графика
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Полностью скрыть легенду
            },
        },
        scales: {
            y: {
                grid: {
                    display: false
                  },
                min: 0, // Минимальное значение
                max: max, // Максимальное значение
                ticks: {
                    stepSize: 3, // Шаг делений
                    font: {weight: 'bold'},
                },

            },
            x: {
                type: 'linear',
                grid: {
                    display: false
                  },
                ticks: {
                    font: {weight: 'bold'},
                },
            }
        }
    };

    // @ts-expect-error 12345
    return <Line data={data} options={options} />;
};

interface DataPoint {
    x: number;
    y: number;
}
interface data {
    PorT : number;
    time: string;
}
interface Prop {
    max?: number
    data : data[]
}
const Graphic: React.FC<Prop> = (({data, max = 0}) => {

    const [dataPoints, setDataPoints] = useState<DataPoint[]>([])
    useEffect(() => {
        console.log(data)
        const temp : DataPoint[] = [];
        if (data === undefined) {
            return;
        }
        data.forEach(value => {
           const keys = Object.keys(value);
           console.log(keys)

           const date = new Date(value[keys[1]]);
           const hours = date.getUTCHours();
           const minutes = date.getUTCMinutes();
           temp.push({x : hours + (minutes / 60), y : value[keys[0]]});

        })
        console.log(temp)
        setDataPoints(temp)
    },[data])
    
    // Пример данных для графика
   
    return (
        <div style={{position: "absolute", left: '70%', top: '24%', height: '30%', width: '27%'}}>
            <LineChart max={max} dataPoints={dataPoints} />
        </div>
    );
});

export default Graphic;