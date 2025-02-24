// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef } from 'react';

interface YandexMapProps {
    coordinates: [number, number] | undefined;
}

const YandexMap: React.FC<YandexMapProps> = ({ coordinates }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yandexMapInstance = useRef<any>(null);
    const placemarkRef = useRef(null); // Keep track of the placemark

    useEffect(() => {
            const initMap = () => {
                if (mapRef.current && window.ymaps) {
                    window.ymaps.ready(() => {
                        const map = new window.ymaps.Map(mapRef.current, {
                            center: [55.7558, 37.6173],
                            zoom: 13,
                            controls: []
    
                    }, { suppressMapOpenBlock: true});
                    const mark = new window.ymaps.Placemark(coordinates, {
                        balloonContent: '',
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/assets/Notifications/icon.svg',
                        hasBalloon: false,
                        hasHint: false,
                    });
                    map.geoObjects.add(mark);
                    placemarkRef.current = mark;
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
        if (coordinates === undefined)
            return
        placemarkRef.current.geometry.setCoordinates(coordinates);
        yandexMapInstance.current.setCenter(coordinates)
    },[coordinates])


    return <div ref={mapRef} style={{ position: 'absolute', left: '50%', top: '10%', height: '24vw', width: '20vw' }} />;
};

export default YandexMap;