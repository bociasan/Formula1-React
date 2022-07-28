import { mockData } from "../data/mockData.js";
import {DriverCard} from "./DriverCard";
import {useState} from "react";

export const DriverCardsContainer = () => {
    const [drivers, setDrivers] = useState([...mockData.sort((a,b) => b.points - a.points)])

    const incrementFunc = (key) => {
        drivers.find((driver) => (driver.number===key)).points++
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }

    const decrementFunc = (key) => {
        let driverPoints = drivers.find((driver) => driver.number==key)
        driverPoints.points > 0 ?  driverPoints.points-- : driverPoints.points = 0
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }

    const incrementDecrementFunc = (key, type = false) => {
        let driverPoints = drivers.find((driver) => driver.number==key)
        type ? driverPoints.points++
            : driverPoints.points > 0 ? driverPoints.points-- : driverPoints.points = 0
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }



    return drivers.map((driver, index)=> (
        <DriverCard dataKey={driver.number} key={driver.number} driver={driver} index={index+1}
                    incrementDecrementFunc={incrementDecrementFunc}/>

        // <DriverCard dataKey={driver.number} key={driver.number} driver={driver} index={index+1} incrementFunc={incrementFunc} decrementFunc={decrementFunc} />
    ))
}