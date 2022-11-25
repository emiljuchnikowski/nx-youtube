import { Injectable } from "@nestjs/common";

import { SharedService } from "./shared.service";

@Injectable()
export class SharedNestService extends SharedService {}