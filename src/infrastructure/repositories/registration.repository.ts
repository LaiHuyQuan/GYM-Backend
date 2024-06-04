// import { Registration } from 'src/domain/entities/registration.entity';
// import { IRegistrationRepository } from 'src/domain/registration/repositories/registration.repository.interface';
// import { DataSource } from 'typeorm';
//
// export const RegistrationRepository = (dataSource: DataSource) => {
//   const baseRepository = dataSource.getRepository(Registration);
//
//   return baseRepository.extend({
//     // ... (other methods)
//
//     async findRegistrationsWithPackageDetailsByMemberId(
//       memberId: string,
//     ): Promise<Registration[]> {
//       return this.find({
//         where: { member: { memberId } }, // Filter by memberId
//         relations: ['trainingPackage'], // Eager load the trainingPackage relation
//       });
//     },
//   }) as IRegistrationRepository;
// };
