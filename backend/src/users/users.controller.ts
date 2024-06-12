import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UpdateUser } from 'dtos';
import { JWTAuthGuard } from 'src/guards/jwt-auth.guard';
import { z } from 'zod';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JWTAuthGuard)
  async updateUser(@Req() req, @Body() body: UpdateUser) {
    try {
      const schema = z.object({
        name: z.string().nullable().optional(),
      });
      schema.parse(body);
    } catch (err) {
      throw new HttpException(err.issues, HttpStatus.BAD_REQUEST);
    }
    const updateRes = await this.usersService.update(req.user.id, body);
    if (updateRes.affected) {
      return this.usersService.get(req.user.id);
    } else {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
