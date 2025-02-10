// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
interface YandexMapProps {
    coordinates: [number, number]; // [latitude, longitude]
}

const YandexMap: React.FC<YandexMapProps> = ({ coordinates }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yandexMapInstance = useRef<any>(null);

    const token = Cookie.get('jwt');
    
    const [points, setPoints] = useState([]);
    const [count, setCount] = useState(0)
    const [map,setMap] = useState(null);

    useEffect(() => {
        axios.get('https://algalar.ru:8080/position/carroute?car_id=6d6892d9-154d-4cd0-8887-f6e668cde515&time_from=2023-12-24T15:30:00Z&time_to=2025-12-24T15:30:00Z', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => setPoints(r.data.map(point => point.point)))
    },[])

    useEffect(() => {
        const initMap = () => {
            if (mapRef.current && window.ymaps) {
                window.ymaps.ready(() => {
                    setMap(new window.ymaps.Map(mapRef.current, {
                        center: coordinates,
                        zoom: 13,
                        controls: []

                }, { suppressMapOpenBlock: true}));

                
                  yandexMapInstance.current = map;
                    const placemark = new window.ymaps.Placemark(points[1], {
                        balloonContent: 'Your location',
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/components/Location/icon.svg', 
                    });

                    map.geoObjects.add(placemark);
                    yandexMapInstance.current = map;
                });
            }
        };

        const loadYandexMaps = () => {
            if (!document.querySelector('script[src="https://api-maps.yandex.com/2.1/?lang=ru_RU"]')) {
                const ymapsScript = document.createElement('script');
                ymapsScript.src = "https://api-maps.yandex.com/2.1/?apikey=2ce1f479-b990-4fa6-b136-dd14cd134e90&lang=ru_RU";
                ymapsScript.onload = () => {
                    if (window.ymaps) {
                        initMap();
                    }
                };
                document.body.appendChild(ymapsScript);
            } else if (window.ymaps) {
                initMap();
            }
        };

        loadYandexMaps();

        return () => {
            if (yandexMapInstance.current) {
                yandexMapInstance.current.destroy();
                yandexMapInstance.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const addMultiRoute = () => {
            if (map && window.ymaps && points.length > 0) {
                const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                    referencePoints: points.slice(0, 80),
                    params: {
                        results: 2
                    }
                }, {
                    boundsAutoApply: true
                });

                map.geoObjects.add(multiRoute);

                const placemark = new window.ymaps.Placemark(points[1], {
                    balloonContent: 'Your location',
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/components/Location/icon.svg',
                });

                map.geoObjects.add(placemark);
            }
        };

        addMultiRoute();
    }, [map, points]);

    return <> <button onClick={() => setCount(count + 1)} /> <div ref={mapRef} style={{ position: 'absolute', left: '1.5%', top: '1.5%', height: '97%', width: '97%' }} /> </>;
};

export default YandexMap;