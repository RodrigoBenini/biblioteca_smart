import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { Public } from 'src/custom.decorator';
import { AuthService } from './auth.service';
import { Admin } from './types';
import { JwtAuthGuard } from './jwt.guard';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    @Public() 
            @Post('/login')
            async loginAdmin(@Body() admin:Admin){
            const teste = await this.authService.login(admin);
            console.log({teste})
            return teste;
            }
 

}
