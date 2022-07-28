import { mockData } from "../data/mockData.js";
import {DriverCard} from "./DriverCard";
import {useEffect, useState} from "react";
import {foundDriver} from "../functions/foundDriver"

export const DriverCardsContainer = (props) => {
    const {searchValue} = props
    const [drivers, setDrivers] = useState([...mockData.sort((a,b) => b.points - a.points)])

    const resetDriversState = () =>(setDrivers([...mockData.sort((a,b) => b.points - a.points)]))




    useEffect(() => {
        if (searchValue !='') {

            setDrivers([...mockData].filter((driver) => foundDriver(drivers, driver, searchValue)))
        } else {
            resetDriversState()
        }
        //console.log(searchValue)
    } , [searchValue])

    const incrementDecrementFunc = (key, type = false) => {
        let driverPoints = drivers.find((driver) => driver.number==key)
        type ? driverPoints.points++
            : driverPoints.points > 0 ? driverPoints.points--
                : driverPoints.points = 0
        setDrivers([...drivers].sort((a, b) => (b.points - a.points)))
    }

    return drivers.map((driver, index)=> (
        <DriverCard dataKey={driver.number} key={driver.number} driver={driver} index={index+1}
                    incrementDecrementFunc={incrementDecrementFunc}/>

        // <DriverCard dataKey={driver.number} key={driver.number} driver={driver} index={index+1} incrementFunc={incrementFunc} decrementFunc={decrementFunc} />
    ))
}