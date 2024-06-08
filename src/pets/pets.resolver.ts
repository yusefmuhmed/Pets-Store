import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) { }

    @Query( returns => [Pet])
    async pets() {
        return await this.petsService.findAll();
    }

    @Mutation( returns => [Pet])
    async createPets(pet : Pet) {
        return await this.petsService.createOnePet(pet);
    }
    @Query( returns => Pet)
    async getPet(@Args('id', {type: () => Int}) id: number){
        return await this.petsService.findOne(id);
    }


}


