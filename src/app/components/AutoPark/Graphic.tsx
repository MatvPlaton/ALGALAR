"use client"
import React from 'react';

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
                min: 0, // Минимальное значение
                max: max, // Максимальное значение
                ticks: {
                    stepSize: 3, // Шаг делений
                    font: {weight: 'bold'},
                },

            },
            x: {
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
interface Prop {
    max?: number
    wheel: number;
}
const Graphic: React.FC<Prop> = (({wheel, max = 0}) => {

    const dataPoints = [];
    dataPoints.push([]);
    dataPoints.push([
        { x: 1, y: 7.5 },
        { x: 12, y: 8.1 },
    ]);
    // Пример данных для графика
    dataPoints.push([
        { x: 1, y: 7.5 },
        { x: 4, y: 5.5 },
        { x: 8, y: 10 },
        { x: 12, y: 9 },
        { x: 15, y: 8.4 },
        { x: 18, y: 8 },
        { x: 24, y: 6.3 }
    ]);
    return (
        <div style={{position: "absolute", left: '70%', top: '24%', height: '30%', width: '27%'}}>
            <LineChart max={max} dataPoints={dataPoints[wheel + 1]} />
        </div>
    );
});

export default Graphic;