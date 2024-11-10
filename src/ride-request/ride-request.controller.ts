import {
  Body,
  Controller,
  HttpException,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { RideRequestService } from './ride-request.service';

@Controller('ride-request')
export class RideRequestController {
  constructor(private rideRequestService: RideRequestService) {}

  @Post()
  create(@Body() data: any) {
    try {
      return this.rideRequestService.create(data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
