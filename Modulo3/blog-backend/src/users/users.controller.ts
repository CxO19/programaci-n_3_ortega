import { Controller, Get, Post, Put, Body, Param, Query, UseGuards, NotFoundException, UseInterceptors, BadRequestException, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { QueryDto } from 'src/common/dto/query.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { diskStorage } from 'multer';

@Controller('users')
export class UsersController {
  categoriesService: any;
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async user(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return new SuccessResponseDto('User created successfully', user);
  }

  @Get()
  async findAll(@Query() query: QueryDto) {
    const result = await this.usersService.findAll(query);
    return new SuccessResponseDto('Users retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    return new SuccessResponseDto('User retrieved successfully', user);
  }

  @Put(':id/profile')
  @UseInterceptors(FileInterceptor('profile', {
    storage: diskStorage({
      destination: './public/profile',
      filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        return cb(new BadRequestException('Only JPG or PNG files are allowed'), false);
      }
      cb(null, true);
    }
  }))
  async uploadProfile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) throw new BadRequestException('Profile image is required');
    const user = await this.usersService.updateProfile(id, file.filename);
    return new SuccessResponseDto('Profile image updated', user);
  }
}