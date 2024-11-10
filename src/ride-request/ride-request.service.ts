import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/entities/location.entity';
import { RideRequest } from 'src/entities/ride-request';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RideRequestService {
  constructor(
    @InjectRepository(RideRequest)
    private readonly rideRequestRepository: Repository<RideRequest>,

    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,

    @InjectRepository(User)
    private readonly userRepository: Repository<Location>,
  ) {}

  async create(data: any) {
    const { startLocation, endLocation, passanger_id } = data;

    const startLocationEntity = await this.locationRepository.save(
      this.locationRepository.create(startLocation),
    );

    const endLocationEntity = await this.locationRepository.save(
      this.locationRepository.create(endLocation),
    );

    const passanger = await this.userRepository.findOne({
      where: { id: passanger_id },
    });
    if (!passanger) {
      throw new Error('Пассажир не найден');
    }

    // const rideRequest = this.rideRequestRepository.create({
    //   passanger: passanger,
    //   //   pickup_location: startLocationEntity,
    //   dropoff_location: endLocationEntity,
    //   requested_time: new Date(),
    //   status: 'pending',
    // });

    // return await this.rideRequestRepository.save(rideRequest);
  }
}
