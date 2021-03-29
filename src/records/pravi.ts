import { getConnection } from "typeorm";
import { Avtomobil } from "../entity/Avtomobil";
import { Narushenie } from "../entity/Narushenie";
import { Pravi } from "../entity/Pravi";

export default async function createPravi(avtomobili: Avtomobil[], narusheniq: Narushenie[]) {
    const repo = await getConnection().getRepository(Pravi);
    
    const pravi = repo.create({
        data: new Date(),
    });

    const pravi2 = repo.create({
        data: new Date(),
    });

    const pravi3 = repo.create({
        data: new Date(),
    });

    const pravi4 = repo.create({
        data: new Date(),
    });

    const pravi5 = repo.create({
        data: new Date(),
    });

    const pravi6 = repo.create({
        data: new Date(),
    });

    const pravi7 = repo.create({
        data: new Date(),
    });

    const pravi8 = repo.create({
        data: new Date(),
    });

    const pravi9 = repo.create({
        data: new Date(),
    });

    const pravi10 = repo.create({
        data: new Date(),
    });

    const praviArray = [pravi, pravi2, pravi3, pravi4, pravi5, pravi6, pravi7, pravi8, pravi9, pravi10];

    for (let i = 0; i < praviArray.length; i++) {
        if (avtomobili[i] && praviArray[i]) {
            praviArray[i].avtomobil = avtomobili[i];
        }

        if (narusheniq[i] && praviArray[i]) {
            praviArray[i].narushenie = narusheniq[i];
        }
    }

    return praviArray;
}