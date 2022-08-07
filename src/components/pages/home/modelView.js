import { useState } from "react"

export default function ModelView() {
    const [restaurantInfo, setRestaurantInfo] = useState([]);

    async function fetchResInfo() {
        const response = await fetch('http://localhost:3001/top-restaurants');
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