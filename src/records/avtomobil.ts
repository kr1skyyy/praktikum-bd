import { getConnection } from "typeorm";
import { Avtomobil } from "../entity/Avtomobil";
import { Sobstvenik } from "../entity/Sobstvenik";

export default async function createAvtomobili(sobstvenici: Sobstvenik[]) {
    const repo = await getConnection().getRepository(Avtomobil);
    
    const avtomobil = repo.create({
        regnomer: 'PP1234BC',
        cvqt: 'bql',
        marka: 'Mercedes',
        zakupen: new Date(),
    });

    const avtomobil2 = repo.create({
        regnomer: 'P1234BP',
        cvqt: 'cherven',
        marka: 'Ferrari',
        zakupen: new Date(),
    });

    const avtomobil3 = repo.create({
        regnomer: 'B1234BB',
        cvqt: 'sin',
        marka: 'Ford',
        zakupen: new Date(),
    });

    const avtomobil4 = repo.create({
        regnomer: 'PP1111BC',
        cvqt: 'rozov',
        marka: 'Citroen',
        zakupen: new Date(),
    });

    const avtomobil5 = repo.create({
        regnomer: 'PP1233BC',
        cvqt: 'zelen',
        marka: 'Opel',
        zakupen: new Date(),
    });

    const avtomobil6 = repo.create({
        regnomer: 'PP1224BC',
        cvqt: 'kafqv',
        marka: 'VW',
        zakupen: new Date(),
    });

    const avtomobil7 = repo.create({
        regnomer: 'PP4234BC',
        cvqt: 'metalik',
        marka: 'Mercedes',
        zakupen: new Date(),
    });

    const avtomobil8 = repo.create({
        regnomer: 'PP1434BC',
        cvqt: 'svetlo sin',
        marka: 'Ford',
        zakupen: new Date(),
    });

    const avtomobil9 = repo.create({
        regnomer: 'PP1444BC',
        cvqt: 'lilav',
        marka: 'Alfa Romeo',
        zakupen: new Date(),
    });

    const avtomobil10 = repo.create({
        regnomer: 'OB4444AP',
        cvqt: 'bql',
        marka: 'Opel',
        zakupen: new Date(),
    });

    const avtomobili = [avtomobil, avtomobil2, avtomobil3, avtomobil4, avtomobil5, avtomobil6, avtomobil7, avtomobil8, avtomobil9, avtomobil10];
    
    for (let i = 0; i < sobstvenici.length; i++) {
        if (!avtomobili[i]) return avtomobili;

        if (sobstvenici[i]) {
            avtomobili[i].sobstvenik = sobstvenici[i];
        }
    }

    return avtomobili;
}
    