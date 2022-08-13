// we restict the data type in object by generic way
interface APIResponse <T> {
    status: number;
    type: string;
    data: T;
}

// we define the generic type as object
const response1: APIResponse <object> = {
    status: 200,
    type: 'good',
    data: {
        id: 1,
        name: 'abc'
    }
}

// error occurs if we want to send anything except onject by data