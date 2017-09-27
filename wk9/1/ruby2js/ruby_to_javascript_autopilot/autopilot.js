let cars = []

const get_new_car = {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
}

const add_car = (cars, new_car) => {
    cars.push(new_car);
    return `Adding new car to fleet. Fleet size is now ${cars.length}.`;
}

const pick_up_passenger = (car) => {
    car.passengers ++;
    car.gas -= 10;
    return `Picked up passenger. Car now has ${car.passengers} passengers.`;
}

const get_destination = (car) => {
    if (car.city === 'Toronto'){
        return 'Mississauga'
    } else if( car.city == 'Mississauga'){
        return 'London'
    } else if (car.city == 'London'){
        return 'Toronto'
    }
}


const fill_up_gas = (car) => {
    let oldGas = car.gas
    car.gas = 100
    return `Filled up to ${ get_gas_display(car.gas) } on gas from ${ get_gas_display(oldGas) }.`
}

const get_gas_display = (gas_amount) => {
    return `${gas_amount}%`
}


const drive = (car, city_distance) => {
    if (car.gas < city_distance){ fill_up_gas(car)}

    car.city = get_destination(car)
    car.gas -= city_distance
    return `Drove to ${car.city}. Remaining gas: ${ get_gas_display(car.gas) }.`
}

const drop_off_passengers = (car) => {
    let previous_passengers = car.passengers
    car.passengers = 0
    return `Dropped off ${previous_passengers} passengers.`
}

const act = (car) => {
    let distance_between_cities = 50

    if (car.gas < 20){
        fill_up_gas(car)
    } else if (car.passengers < 3) {
        pick_up_passenger(car)
    } else {
        if (car.gas < distance_between_cities){return fill_up_gas(car)}
        let drove_to = drive(car, distance_between_cities)
        let passengers_dropped = drop_off_passengers(car)
        return `${drove_to} ${passengers_dropped}`
    }
}

const command_fleet = (cars) => {
    cars.forEach((eachCar, index) => {
        let action = act(car)
        console.log(`Car ${i + 1}: ${action}`);
    })
    console.log('---');
}

const add_one_car_per_day = (cars, num_days) => {
    for (let i = 0; i < num_days.times; i++) {
        let new_car = get_new_car
        add_car(cars, new_car);
        command_fleet(cars)
    }
}


add_one_car_per_day(cars, 10)
