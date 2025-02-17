// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';
// import zoomPlugin from 'chartjs-plugin-zoom';
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


// Типизация для данных точек


// Пропсы компонента
interface LineChartProps {
    dataPoints: DataPoint[];
    type: string;
}

const LineChart: React.FC<LineChartProps> = ({type, dataPoints}) => {
    ChartJS.register(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Title,
        Tooltip,
        Legend
    );
    useEffect(() => {
        if (typeof window !== "undefined")
          import("chartjs-plugin-zoom").then((plugin) => {
            ChartJS.register(plugin.default);
          });
        }, []);
    // Подготовка данных для графика
    const data = {
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
            zoom: {
                pan: {
                  enabled: true,
                  mode: 'x', // Allow panning in the X direction
                },
                zoom: {
                  wheel: {
                    enabled: true, // Enable zooming with the mouse wheel
                  },
                  pinch: {
                    enabled: true, // Enable zooming with pinch gestures on touch devices
                  },
                  mode: 'x', // Zoom in the X direction (set to 'xy' for both axes)
                },
              },
        },
        scales: {
            y: {
                grid: {
                    display: false
                  },
                min: type === 'pressure' ? 0 : 0, // Минимальное значение
                max: type === 'pressure' ? 12 : 200, // Максимальное значение
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
                  max: 24,
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
    data : data[]
    type: string
}
const Graphic: React.FC<Prop> = (({data, type}) => {

    const [dataPoints, setDataPoints] = useState<DataPoint[]>([])

     
    useEffect(() => {
        console.log(data)
        const temp : DataPoint[] = [];
        if (data === undefined) {
            return;
        }
        data.forEach(value => {
           const keys = Object.keys(value);
           const date = new Date(value[keys[1]]);
           let hours = date.getUTCHours();
           if (hours < 0) {
            hours = 24 + hours;
           }
           const minutes = date.getUTCMinutes();
           temp.push({x : hours + (minutes / 60), y : value[keys[0]]});

        })
        setDataPoints(temp)
    },[data])
    
    // Пример данных для графика
   
    return (
        <div style={{position: "absolute", left: '43%', top: '20%', height: '40%', width: '50%'}}>
            <LineChart type={type} dataPoints={dataPoints} />
        </div>
    );
});

export default Graphic;