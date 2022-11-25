import { Injectable } from '@nestjs/common';

import { shared } from '@test-nx/shared';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!: ' + shared() };
  }
}
