import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Toyota','Honda','Mazda'];
    @Get()
    getAllCars(){
        return this.cars;
    }
    @Get(':id')
    getCarById(@Param( 'id' ) id ){
        console.log({id})
        //return {id}
        return this.cars[id];
        //Al colocar en postman: http://localhost:3000/cars/3
        //me devolverá el carro que está en la posición '#3'
        //de mi lista. Si mi lista no tiene '#3', debemos crear
        //un método de seguridad para que no existan esos cabos
        //sueltos en nuestro proyecto.
    }
}
