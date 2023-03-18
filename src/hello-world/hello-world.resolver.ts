import { Float, Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  //en query le especifico que es un string
  @Query(() => String, {
    //describir el query
    description: 'Hola mundo es lo que retorna',
    //nombre del metodo, esto tiene mas peso
    name: 'hello',
  })
  //helloworld es el metodo
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argument TO (default 6)',
  })
  getRandomFromZeroTo(
    //esto es un argumento de grapql
    @Args(
      'to',
      //puede ser null y el tipo es entero
      { nullable: true, type: () => Int },
    )
    //el argumento to por defecto es 6
    to: number = 6,
  ): number {
    //to es el argumento enviado desde el front
    return Math.floor(Math.random() * to);
  }
}
