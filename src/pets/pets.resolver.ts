import { Resolver, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) { }

    @Query( returns => [Pet])
    async pets() {
        return await this.petsService.findAll();
    }
}


