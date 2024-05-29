import { InputType } from "@nestjs/graphql";

@InputType()

export class CreatePetInput{
    name: string;
    type?: string;
} 