import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private UserModel: Model<User>) { }

  async create(userData: CreateUserDto) {

    let newUser = await this.UserModel.create({
      name: userData.name,
      email: userData.email,
      password: userData.password
    })

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    let foundUser = await this.UserModel.findOne({
      _id: id
    })

    return foundUser;

    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    //console.log(updateUserDto);
    let updateUser = await this.UserModel.updateOne({ _id: id }, updateUserDto)
    return updateUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
