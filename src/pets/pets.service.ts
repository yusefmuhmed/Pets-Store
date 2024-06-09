import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet-input';
import { OwnersService } from '../owners/owners.service';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>, private ownersService: OwnersService) { }
    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find();
    }

    async createOnePet(pet: CreatePetInput): Promise<Pet> {
        const newPet = this.petsRepository.create(pet);
        return this.petsRepository.save(newPet);
    }

    async findOne(id: number): Promise<Pet> {
        return this.petsRepository.findOneByOrFail({ id: id });
    }

    async getOwner(ownerId: number) {
        return await this.ownersService.findOne(ownerId);
    }
}
