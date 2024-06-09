import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from '../../pets/pet.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn('increment')
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => String)
  name: string;


  @OneToMany(()=>Pet, pet=>pet.owner)
  @Field(type=>[Pet],{
    nullable:true
  })
  pets?: [Pet];

}
