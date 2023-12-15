import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProfileModule, {
    transport: Transport.TCP,
    options: {
      port: 8082,
    }
  });
  await app.listen();
}
bootstrap();
