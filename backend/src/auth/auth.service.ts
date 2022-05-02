import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>
  ) { }

  async login(admin: Admin) {
    if (!await this.validateUser(admin))
      return { errorMessage: 'Acesso negado'};
    return {
      access_token: this.jwtService.sign(admin)
    };
  }


  async validateUser(admin: Admin) {
    const validAdmin = await this.adminModel.findOne(admin).exec();
    console.log({validAdmin: !!validAdmin});
    return !!validAdmin
  }



}