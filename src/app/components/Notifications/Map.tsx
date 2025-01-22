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

                const multiRoute = new ymaps.multiRouter.MultiRoute({
                    // Описание опорных точек мультимаршрута.
                    referencePoints: [
                      [55.861352, 37.545552],
                      [55.730086, 37.589239], // Комсомольский проспект, 13
                      [55.729914, 37.397207],
                    ],
                    params: {
                      results: 2
                    }
                  }, {
                    boundsAutoApply: true
                  });
                  map.geoObjects.add(multiRoute);
                  yandexMapInstance.current = map;

                    const placemark = new window.ymaps.Placemark(coordinates, {
                        balloonContent: 'Your location',
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/components/Location/icon.svg', // Используем HTTPS-ссылку
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

    return <div ref={mapRef} style={{ position: 'absolute', left: '50%', top: '10%', height: '24vw', width: '20vw' }} />;
};

export default YandexMap;