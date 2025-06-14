import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService: CarsService
    ){}
    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }
     @Get(':id')
     getCarById(@Param( 'id', ParseIntPipe ) id: number ){
         console.log({id});
         return this.carsService.getCarById(id);
        //Al colocar en postman: http://localhost:3000/cars/3
        //me devolverá el carro que está en la posición '#3'
        //de mi lista. Si mi lista no tiene '#3', debemos crear
        //un método de seguridad para que no existan esos cabos
        //sueltos en nuestro proyecto.
    }
    @Post()
    createCar(@Body() body: any){
        return body;
    }
    @Patch('/:id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any)
        {
        return body;
        }
    @Delete('/:id')
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        };
    }
}
