import { Factory, Seeder } from 'typeorm-seeding';
import { GymOrmEntity } from 'src/infrastructure/orm/gym.orm-entity';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateGyms implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(GymOrmEntity)().createMany(10, {
      id: uuidv4(),
      roomName: faker.company.name() + ' Gym',
      numberOfRooms: faker.number.int({ min: 1, max: 10 }),
    });
  }
}
