import { Module } from '@nestjs/common';
import { CobaService } from './coba.service';
import { CobaController } from './coba.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coba, CobaSchema } from './schemas/coba.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Coba.name, schema: CobaSchema}
    ])
  ],
  controllers: [CobaController],
  providers: [CobaService]
})
export class CobaModule {}
