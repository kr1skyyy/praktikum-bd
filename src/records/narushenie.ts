import { getConnection } from "typeorm";
import { Narushenie } from "../entity/Narushenie";

export default async function createNarusheniq() {
    const repo = await getConnection().getRepository(Narushenie);
    
    const narushenie = repo.create({
        kod: '1',
        vid: 'Leko',
    });

    const narushenie2 = repo.create({
        kod: '2',
        vid: 'Nepravilno Parkirane',
    });

    const narushenie3 = repo.create({
        kod: '3',
        vid: 'Karane bez knijka',
    });

    const narushenie4 = repo.create({
        kod: '4',
        vid: 'Shofirane bez kolan',
    });

    const narushenie5 = repo.create({
        kod: '5',
        vid: 'Tejko',
    });

    const narushenie6 = repo.create({
        kod: '6',
        vid: 'Katastrofa',
    });

    const narushenie7 = repo.create({
        kod: '7',
        vid: 'PTP',
    });

    const narushenie8 = repo.create({
        kod: '8',
        vid: 'Nepravilen zavoi',
    });

    const narushenie9 = repo.create({
        kod: '9',
        vid: 'Karane v greshna lenta',
    });

    const narushenie10 = repo.create({
        kod: '10',
        vid: 'Nepozvoleno izprevarvane',
    });

    return [narushenie, narushenie2, narushenie3, narushenie4, narushenie5, narushenie6, narushenie7, narushenie8, narushenie9, narushenie10];
}