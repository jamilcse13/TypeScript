// we restict the data type in object by generic way

// enum
enum RType {SUCCESS, FAILURE, FORBIDDEN}
interface APIResponse <T> {
    status: number;
    type: RType;
    data: T;
}

// we define the generic type as object
const response1: APIResponse <object> = {
    status: 200,
    type: RType.FAILURE,
    data: {
        id: 1,
        name: 'abc'
    }
}

// error occurs if we want to send anything except onject by data