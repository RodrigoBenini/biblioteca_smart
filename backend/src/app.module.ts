import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt.guard';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://user:7v4lXgWtzvEbVO79@biblioteca.b8ekn.mongodb.net/Biblioteca?retryWrites=true&w=majority'), BibliotecaModule],
  
  providers: [  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule {}
