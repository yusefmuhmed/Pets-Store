import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}