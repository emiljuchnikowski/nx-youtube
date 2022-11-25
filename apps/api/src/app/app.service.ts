import { Injectable } from '@nestjs/common';

import { SharedNestService } from '@test-nx/shared/nest';

@Injectable()
export class AppService {
  constructor(private readonly sharedService: SharedNestService) {}

  getData(): { message: string } {
    return { message: '2 + 3 = ' + this.sharedService.add(2, 3) };
  }
}
