import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  
  @Field(type => String)
  name: string;
}
