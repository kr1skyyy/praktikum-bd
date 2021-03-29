import { getConnection } from "typeorm";
import { Sobstvenik } from "../entity/Sobstvenik";

export default async function createSobstvenici() {
    const repo = await getConnection().getRepository(Sobstvenik);
    
    const sobstvenik = repo.create({
        adres: 'Address 1',
        egn: '11111111111',
        ime: 'Ivan Petrov',
        knijka: '111111111',
        talon: '11111111',
    });

    const sobstvenik2 = repo.create({
        adres: 'Address 2',
        egn: '22222222222',
        ime: 'Ivan Ivanov',
        knijka: '222222222',
        talon: '22222222',
    });

    const sobstvenik3 = repo.create({
        adres: 'Address 3',
        egn: '33333333333',
        ime: 'Kristiqn Kristiqnov',
        knijka: '333333333',
        talon: '33333333',
    });

    const sobstvenik4 = repo.create({
        adres: 'Address 4',
        egn: '44444444444',
        ime: 'Dimitur Ivanov',
        knijka: '444444444',
        talon: '44444444',
    });

    const sobstvenik5 = repo.create({
        adres: 'Address 5',
        egn: '55555555555',
        ime: 'Jivko Jelqzkov',
        knijka: '555555555',
        talon: '55555555',
    });

    const sobstvenik6 = repo.create({
        adres: 'Address 6',
        egn: '66666666666',
        ime: 'Todor Petrov',
        knijka: '666666666',
        talon: '66666666',
    });

    const sobstvenik7 = repo.create({
        adres: 'Address 7',
        egn: '77777777777',
        ime: 'Antoan Ivanov',
        knijka: '777777777',
        talon: '77777777',
    });

    const sobstvenik8 = repo.create({
        adres: 'Address 8',
        egn: '88888888888',
        ime: 'Stoqn Stoqnov',
        knijka: '888888888',
        talon: '88888888',
    });

    const sobstvenik9 = repo.create({
        adres: 'Address 9',
        egn: '99999999999',
        ime: 'Aneliq Petrova',
        knijka: '999999999',
        talon: '99999999',
    });

    const sobstvenik10 = repo.create({
        adres: 'Address 10',
        egn: '10101010101',
        ime: 'Kameliq Ivanova',
        knijka: '101010101',
        talon: '10101010',
    });

    return [sobstvenik, sobstvenik2, sobstvenik3, sobstvenik4, sobstvenik5, sobstvenik6, sobstvenik7, sobstvenik8, sobstvenik9, sobstvenik10];
}