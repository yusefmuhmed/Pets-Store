import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet-input';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) { }

    @Query( returns => [Pet])
    async pets() {
        return await this.petsService.findAll();
    }

    @Mutation( returns => Pet)
    async createPet(@Args('createPetInput') createPetInput : CreatePetInput) {
        return await this.petsService.createOnePet(createPetInput);
    }
    @Query( returns => Pet)
    async getPet(@Args('id', {type: () => Int}) id: number){
        return await this.petsService.findOne(id);
    }


}


