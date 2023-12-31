import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TopicModule } from './topic/topic.module';

@Module({
  imports: [UserModule, CommentModule, TopicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
