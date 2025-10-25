const carData = [
{ title: 'Audi', description: 'Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.' },
{ title: 'Mercedes-Benz', description: 'Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.' },
{ title: 'BMW', description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.' }
];
function getCars() {
return new Promise(resolve => {
setTimeout(function(){
// resolve the promise with the car data after 1s
resolve(carData)
}, 1000)
})
}
// get data asynchronously, then console.log for testing
getCars().then((cars) => console.log(cars))