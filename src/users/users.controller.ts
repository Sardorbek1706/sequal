import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { TimeoutInterceptor } from 'src/interceptors/timeout.interceptor';

@Controller('users')
@UseInterceptors(new LoggingInterceptor())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(new TimeoutInterceptor())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
   @UseInterceptors(new TimeoutInterceptor())
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
   @UseInterceptors(new TimeoutInterceptor())
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
   @UseInterceptors(new TimeoutInterceptor())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
   @UseInterceptors(new TimeoutInterceptor())
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}