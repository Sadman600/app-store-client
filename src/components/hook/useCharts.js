import { useEffect, useState } from "react";

const useCharts = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartsData(data));
    }, []);

    return [chartsData, setChartsData];
}

export default useCharts;