import { define } from 'typeorm-seeding';
import { GymOrmEntity } from 'src/infrastructure/orm/gym.orm-entity';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

define(GymOrmEntity, () => {
  const gym = new GymOrmEntity();
  gym.id = uuidv4();
  gym.roomName = faker.company.name() + ' Gym';
  gym.numberOfRooms = faker.number.int({ min: 1, max: 10 });
  return gym;
});
