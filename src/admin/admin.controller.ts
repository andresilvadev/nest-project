import { Controller, Get, HostParam } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('admin')
// @Controller({ host: 'admin.example.com' })
// @Controller({ host: ':account.example.com' })
export class AdminController {

    constructor() {}

    @Get()
    index(): string {
        return 'Admin page';
    }

    @Get()
    getInfo(@HostParam('account') account: string) {
      return account;
    }

    @Get('admins')
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get('managers')
    findAll2(): Observable<any[]> {
        return of([]);
    }

}
