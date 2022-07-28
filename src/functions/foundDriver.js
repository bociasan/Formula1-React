export const foundDriver = (drivers, driver, value) => {
    let flag = false;
    // value.split(' ').filter((e) => e!='').forEach((el)=>{
    //     console.log(driver, el)
    //     if (driver.lastName.toLowerCase().includes(el.toLowerCase()) || driver.firstName.toLowerCase().includes(el.toLowerCase())){
    //         flag = true;
    //         return true;
    //     }
    // })

    value = value.split(' ').filter((e) => e!='')

    if (value.length == 2) {
        if (driver.lastName.toLowerCase().includes(value[0].toLowerCase()) && driver.firstName.toLowerCase().includes(value[1].toLowerCase())){
            flag = true;
        }
        if (driver.lastName.toLowerCase().includes(value[1].toLowerCase()) && driver.firstName.toLowerCase().includes(value[0].toLowerCase())){
            flag = true;
        }
    }
    if (value.length == 1) {
        if (driver.lastName.toLowerCase().includes(value[0].toLowerCase()) || driver.firstName.toLowerCase().includes(value[0].toLowerCase())){
            flag = true;
        }
    }
    return flag;
}