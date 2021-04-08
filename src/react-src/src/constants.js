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

const MUTATIONS = {
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete',
};

const getList = async (resource) => {
    return (await fetch(`${SERVER_URL}/${resource}`)).json();
};

const mutateEntity = async (resource, payload, mutation) => {
    return (await fetch(`${SERVER_URL}/${mutation}/${resource}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })).json();
};

const createEntity = (resource, payload) => mutateEntity(resource, payload, MUTATIONS.CREATE);
const editEntity = (resource, payload) => mutateEntity(resource, payload, MUTATIONS.EDIT);
const deleteEntity = (resource, payload) => mutateEntity(resource, payload, MUTATIONS.DELETE);

export {
    SERVER_URL,
    RESOURCES,
    VIEWS,
    getList,
    createEntity,
    editEntity,
    deleteEntity,
};