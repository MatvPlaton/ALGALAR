// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef } from 'react';

interface YandexMapProps {
    coordinates: [number, number]; // [latitude, longitude]
}

const YandexMap: React.FC<YandexMapProps> = ({ coordinates }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yandexMapInstance = useRef<any>(null);

    useEffect(() => {
        const initMap = () => {
            if (mapRef.current && window.ymaps) {
                window.ymaps.ready(() => {
                    const map = new window.ymaps.Map(mapRef.current, {
                        center: coordinates,
                        zoom: 13,
                        controls: []

                }, { suppressMapOpenBlock: true});

                   





                    const placemark = new window.ymaps.Placemark(coordinates, {
                        balloonContent: 'Your location',
                    });

                    map.geoObjects.add(placemark);
                    yandexMapInstance.current = map;
                });
            }
        };

        const loadYandexMaps = () => {
            if (!document.querySelector('script[src="https://api-maps.yandex.com/2.1/?lang=ru_RU"]')) {
                const ymapsScript = document.createElement('script');
                ymapsScript.src = "https://api-maps.yandex.com/2.1/?lang=ru_RU";
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
    }, [coordinates]);

    return <div ref={mapRef} style={{ position: 'absolute', left: '6.5%', top: '10%', height: '80vh', width: '55vw' }} />;
};

export default YandexMap;