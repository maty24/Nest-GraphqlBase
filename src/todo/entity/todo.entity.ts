import { Field, Int, ObjectType } from '@nestjs/graphql';

//objeto personalizado de graph
@ObjectType()
export class Todo {

    //le pongo el field para saber que tipo de campo es
    @Field( () => Int )
    id: number;

    @Field( () => String )
    description: string;

    @Field( () => Boolean )
    done: boolean = false;

}