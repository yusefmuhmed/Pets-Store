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

    @Query( returns => [Pet])
    async createPets(pet : Pet) {
        return await this.petsService.createOnePet(pet);
    }


}


