import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Designer, DesignerSchema} from './schemas/designer.schema';
import { SysRequest, SysRequestSchema } from './schemas/sysrequest.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/helpsystem'),
            MongooseModule.forFeature([{ name: Designer.name, schema: DesignerSchema }, 
                                       { name: SysRequest.name, schema: SysRequestSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}