// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

interface Prop {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>> 
    
}
const YandexMap:React.FC<Prop> = ({id,setId}) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yandexMapInstance = useRef<any>(null);

    const token = Cookie.get('jwt');
    
    const [points, setPoints] = useState([]);
    const [placemarks, setPlacemarks] = useState([]);

    const [count, setCount] = useState(0)
    const [map,setMap] = useState(null);

    useEffect(() => {
        axios.get('https://algalar.ru:8080/position/carroute?car_id=6d6892d9-154d-4cd0-8887-f6e668cde515&time_from=2023-12-24T15:30:00Z&time_to=2025-12-24T15:30:00Z', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => setPoints(r.data.positions.map(point => point.point)))
        axios.get('https://algalar.ru:8080/position/listcurrent?whatshere[pointA]=0&whatshere[pointA]=1&whatshere[pointB]=120&whatshere[pointB]=121', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {console.log(r); setPlacemarks(r.data)})
    },[])

    useEffect(() => {
        const initMap = () => {
            if (mapRef.current && window.ymaps) {
                window.ymaps.ready(() => {
                    setMap(new window.ymaps.Map(mapRef.current, {
                        center: [55.74, 37.568423],
                        zoom: 13,
                        controls: []

                }, { suppressMapOpenBlock: true}));

                
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
                    referencePoints: points.slice(0, 40),
                    params: {
                        results: 2
                    }
                }, {
                    boundsAutoApply: true
                });

                map.geoObjects.add(multiRoute);

            }
        };

        addMultiRoute();
    }, [map, points]);
    useEffect(() => {
        console.log(id)
    },[id])
    useEffect(() => {
        const addMarks = () => {
            if (map && window.ymaps && placemarks.length > 0) {
                
                placemarks.forEach(placemark => {
                    const mark = new window.ymaps.Placemark(placemark.point, {
                        balloonContent: `уникальный id: ${placemark.unique_id}`,
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: '/components/Location/icon.svg',
                    });
                    mark.events.add("click", () => {
                        setId(placemark.unique_id) // Update state when clicked
                      });
                    map.geoObjects.add(mark);
                });
                
            }
        };

        addMarks();
    }, [map, placemarks]);
    return <> <button onClick={() => setCount(count + 1)} /> <div ref={mapRef} style={{ position: 'absolute', left: '1.5%', top: '1.5%', height: '97%', width: '97%' }} /> </>;
};

export default YandexMap;