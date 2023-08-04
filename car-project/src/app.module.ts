import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ReportsModule } from './report/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { Report } from './report/entity/report.entity';

@Module({
    imports: [
        UserModule, 
        ReportsModule,
        TypeOrmModule.forRoot({
            type:'sqlite',
            database:'db.squlite',
            entities:[User, Report],
            synchronize:true
        })
    ]
})
export class AppModule {}
