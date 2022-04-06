import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CobaModule } from './coba/coba.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestcoba?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
    UsersModule,
    CobaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
