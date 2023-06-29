export const addObj = (data) => {
    // const hello = async () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    // }
    // hello();
    return {
        type: 'ADD_OBJ',
        myData: data
    }
}

export const apiGetData = (data) => {
    // const hello = async () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    // }
    // hello();
    return {
        type: 'GET_ALL_API_DATA',
        apiData: data
    }
}