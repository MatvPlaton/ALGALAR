// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

interface Prop {
    setId: React.Dispatch<React.SetStateAction<string>> 
    id: string;
}
const YandexMap:React.FC<Prop> = ({setId,id}) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yandexMapInstance = useRef<any>(null);

    const token = Cookie.get('jwt');
    
    const [points, setPoints] = useState([]);
    const [placemarks, setPlacemarks] = useState([]);
    const [map,setMap] = useState(null);
    useEffect(() => {

        const begin = new Date().toLocaleDateString('en-CA');
        axios.get(`https://algalar.ru:8080/position/carroute?car_id=${id}&time_from=${begin}T00:00:00Z&time_to=${begin}T23:59:59Z`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
            if (r.status === 204) {
                setPoints([])
            } else {
            setPoints(r.data.positions.map(point => point.point))
    }})

    placemarks.forEach( (placemark) => 
        placemark.car_id === id ? placemark.ref.options.set({iconImageHref: '/assets/Location/2/icon.png'}) :
            placemark.ref.options.set({iconImageHref: '/assets/Location/icon.png'})
    )
    },[id])

    useEffect(() => {
        
        axios.get('https://algalar.ru:8080/position/listcurrent', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {console.log(r);
            
            r.data.forEach((item) => {
                const placemark = {
                    point : item.point,
                    car_id : item.car_id,
                    href: '/assets/Location/icon.png',
                    ref: null
                }
            
            setPlacemarks(oldPlacemarks => [...oldPlacemarks, placemark])})
        })
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
           
            if (map && window.ymaps) {
                if (multiRouteRef.current) {
                    map.geoObjects.remove(multiRouteRef.current);
                }
                const multiRoute = new window.ymaps.multiRouter.MultiRoute({
                    referencePoints: points,
                    params: {
                        results: 2
                    }
                }, {
                    boundsAutoApply: true
                });

                map.geoObjects.add(multiRoute);
                multiRouteRef.current = multiRoute;

            }
        };

        addMultiRoute();
    }, [map, points]);
    const multiRouteRef = useRef(null);

    useEffect(() => {
        const addMarks = () => {
            if (map && window.ymaps && placemarks.length > 0) {
                
                placemarks.forEach(placemark => {
                    const mark = new window.ymaps.Placemark(placemark.point, {
                        balloonContent: 'Маршрут построен',
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: placemark.href,
                        iconImageSize: [50,20],
                        iconImageOffset: [-15, -14],
                        hasBalloon: false,
                        hasHint: false,
                    });
                
                    mark.events.add("click", () => {
                        setId(placemark.car_id)
    
                    })
                    placemark.ref = mark;
                    map.geoObjects.add(mark);
                });
                
            }
        };

        addMarks();
    }, [map, placemarks]);

    
    return <> <div ref={mapRef} style={{ position: 'absolute', left: '1.5%', top: '1.5%', height: '97%', width: '97%' }} /> </>;
};

export default YandexMap;