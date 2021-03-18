const SERVER_URL = 'http://localhost:4000';
const RESOURCES = {
    SOBSTVENIK: 'sobstvenik',
    AVTOMOBIL: 'avtomobil',
    PRAVI: 'pravi',
    NARUSHENIE: 'narushenie',
}

const getList = async (resource) => {
    return (await fetch(`${SERVER_URL}/${resource}`)).json();
};

export {
    SERVER_URL,
    RESOURCES,
    getList,
};