import { useState } from "react"
import { API } from '../../../config';

export default function controller() {
    const [restaurantInfo, setRestaurantInfo] = useState([]);

    async function fetchResInfo() {
        const response = await fetch(API + '/top-restaurants');
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        setRestaurantInfo(result);
    }

    return {
        restaurantInfo,
        fetchResInfo
    }
}