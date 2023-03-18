import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

//para decorar engraph
@InputType()
export class CreateTodoInput {

    //el tipo de dato y las cracteristicas necesarias
    @Field( () => String, { description: 'What needs to be done' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description: string;


}