import createAvtomobili from "./avtomobil";
import createNarusheniq from "./narushenie";
import createSobstvenici from "./sobstvenik";
import createPravi from "./pravi";

export default async function importRecords(connection) {
    const sobstvenici = await createSobstvenici(); 
    const avtomobili = await createAvtomobili(sobstvenici)
    const narusheniq = await createNarusheniq();
    const pravi = await createPravi(avtomobili, narusheniq);

    const tables = [sobstvenici, avtomobili, narusheniq, pravi];

    for (const table of tables) {
        for (const record of table) {
            await connection.manager.save(record);
        }
    }
};