const SERVER_URL = 'http://localhost:4000';
const RESOURCES = {
    SOBSTVENIK: 'sobstvenik',
    AVTOMOBIL: 'avtomobil',
    PRAVI: 'pravi',
    NARUSHENIE: 'narushenie',
}

const VIEWS = {
    CREATE: 'create',
    EDIT: 'edit',
    LIST: 'list',
}

const getList = async (resource) => {
    return (await fetch(`${SERVER_URL}/${resource}`)).json();
};

const createEntity = async (resource, payload) => {
    return (await fetch(`${SERVER_URL}/create/${resource}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })).json();
};

export {
    SERVER_URL,
    RESOURCES,
    VIEWS,
    getList,
    createEntity,
};