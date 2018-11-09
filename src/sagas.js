import { fork, put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function apiCall(uri) {
  return fetch(`https://swapi.co/api${uri}`).then(response => response.json());
}

export function* getTeam() {
  yield takeLatest('GET_STARSHIPS', function*(action) {
    yield put({ type: 'SET_LOADING', payload: true });

    // Add delay
    yield delay(400);

    // Fetch all ships
    const response = yield apiCall(`/starships`);
    yield put({ type: 'SET_STARSHIPS', payload: response.results });

    yield delay(2000);

    // Get single ship
    const singleShip = yield apiCall(`/starships/2`);
    yield put({ type: 'SET_ACTIVE_SHIP', payload: singleShip });
    yield put({ type: 'SET_LOADING', payload: false });
  });
}

export const sagas = [fork(getTeam)];

export default function* allSagas() {
  yield all([...sagas]);
}
