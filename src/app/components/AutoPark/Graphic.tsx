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
    label: string;
    value: number;
}

// Пропсы компонента
interface LineChartProps {
    dataPoints: DataPoint[];
    max?: number;
}

const LineChart: React.FC<LineChartProps> = ({ max = 0, dataPoints }) => {
    // Подготовка данных для графика
    const data = {
        labels: dataPoints.map((point) => point.label), // Метки оси X
        datasets: [
            {
                label: '',
                data: dataPoints.map((point) => point.value), // Значения точек
                borderColor: 'rgba(75, 192, 192, 1)', // Цвет линии
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Цвет под линией
                pointBorderColor: 'white', // Цвет точек
                pointBackgroundColor: 'purple', // Фон точек
                pointBorderWidth: 2,
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
    label: string;
    value: number;
}
interface Prop {
    max?: number
    dataIndex: number
}
const Graphic: React.FC<Prop> = (({max = 0, dataIndex}) => {
    // Пример данных для графика
    const dataPoints: DataPoint[] = [
        { label: 'ПН', value: 7.5 },
        { label: 'ВТ', value: 8 },
        { label: 'СР', value: 7.7 },
        { label: 'ЧТ', value: 7.6 },
        { label: 'ПТ', value: 7.5 },
        { label: 'СБ', value: 8.1 },
        { label: 'ВС', value: 7.5 }
    ];
    const dataPoints1: DataPoint[] = [
        { label: 'ПН', value: 8.5 },
        { label: 'ВТ', value: 6 },
        { label: 'СР', value: 7.7 },
        { label: 'ЧТ', value: 7.2 },
        { label: 'ПТ', value: 7.9 },
        { label: 'СБ', value: 6.1 },
        { label: 'ВС', value: 7 }
    ];

    return (
        <div style={{position: "absolute", left: '70%', top: '30%', height: '30%', width: '27%'}}>
            <LineChart max={max} dataPoints={dataIndex === 0 ? dataPoints : dataPoints1} />
        </div>
    );
});

export default Graphic;