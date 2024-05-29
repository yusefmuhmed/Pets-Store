import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Pet {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    name: string;

    @Field({
        nullable: true,
        defaultValue: 'unknown',
        description: 'Pet type'
    })
    type?: string;
}