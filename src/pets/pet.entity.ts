import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "../owners/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn('increment')
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => String)
    name: string;

    @Column({
        default: 'unknown',
        nullable: true
    })
    @Field({
        nullable: true,
        defaultValue: 'unknown',
        description: 'Pet type'
    })
    type?: string;


    @Column()
    @Field(type => Int,{
        nullable:true
    })
    ownerId: number


    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(type=>Owner)
    owner: Owner

}