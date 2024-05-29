import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) { }
    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find();
    }

    async createOnePet(pet: Pet): Promise<Pet> {
        const newPet = this.petsRepository.create(pet);
        return this.petsRepository.save(newPet);
    }
}
