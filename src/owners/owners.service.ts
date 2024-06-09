import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>){}
  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput)
    return this.ownerRepository.save(newOwner)
  }

  findAll() {
    return this.ownerRepository.find()
  }

  async findOne(id: number) {
    return await this.ownerRepository.findOneByOrFail({id:id})
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
