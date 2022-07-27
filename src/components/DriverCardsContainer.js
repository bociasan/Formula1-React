import { mockData } from "../data/mockData.js";
import { mockFlags } from "../data/flags.js";
import { mockNumbers } from "../data/numbers.js";
import {DriverCard} from "./DriverCard";
import {useState} from "react";

export const DriverCardsContainer = () => {
    const [drivers, setDrivers] = useState([...mockData.sort((a,b) => b.points - a.points)])
    const incrementFunc = (key, setPoints) => {
        let findDriver = drivers.find((driver) => (
            driver.number===key))
        findDriver.points++
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }

    const decrementFunc = (key) => {
        drivers.find((driver) =>driver.number==key).points--
        drivers.sort((a, b) => (b.points - a.points))
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }

    return drivers.map((driver, index)=> (
        <DriverCard dataKey={driver.number} key={driver.number} driver={driver} index={index+1} incrementFunc={incrementFunc} decrementFunc={decrementFunc} />
    ))
    //console.log(drivers)

}