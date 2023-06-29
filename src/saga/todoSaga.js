import { put, takeEvery } from 'redux-saga/effects'

function* gelAllData() {
    const aaa = fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => console.log(data))
    yield put({ type: 'GET_ALL_API_DATA', apiData: aaa })
}

function* todoData() {
    yield takeEvery('ADD_OBJ', gelAllData)
}

export default todoData