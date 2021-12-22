import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users';
import { HashService } from './services';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BasicJwtExpirationTime, JwtSecret } from './consts';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JwtSecret,
      signOptions: { expiresIn: BasicJwtExpirationTime },
    }),
  ],
  providers: [
    HashService,
    AuthService,
    {
      provide: 'hashRounds',
      useValue: 10,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
