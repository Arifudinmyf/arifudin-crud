import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCobaDto } from './dto/create-coba.dto';
import { UpdateCobaDto } from './dto/update-coba.dto';
import { Coba, CobaDocument } from './schemas/coba.schema';
import { Model } from 'mongoose';

@Injectable()
export class CobaService {
  constructor (@InjectModel (Coba.name) private readonly cobaModel: Model<CobaDocument>) {}

  create(createCobaDto: CreateCobaDto): Promise<CobaDocument> {
    const createCoba = this.cobaModel.create(createCobaDto);
    return createCoba;
  }

  findAll(): Promise<CobaDocument[]> {
    return this.cobaModel.find().exec();
  }

  findOne(id: string): Promise<CobaDocument> {
    return this.cobaModel.findById(id).exec();
  }

  update(id: string, updateCobaDto: UpdateCobaDto): Promise<CobaDocument> {
    return this.cobaModel.findByIdAndUpdate(id, updateCobaDto).exec();
  }

  remove(id: string) {
    return this.cobaModel.findByIdAndDelete(id).exec();
  }
}
