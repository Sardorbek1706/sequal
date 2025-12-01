import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize"
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect:"postgres",
      port:5432,
      host:"localhost",
      username:"postgres",
      database:"Sequelize",
      password:"Resilient1804",
      models:[],
      autoLoadModels:true,
      synchronize:true,
      logging: true
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService, {provide: APP_INTERCEPTOR, useClass: LoggingInterceptor}],
})

export class AppModule {}