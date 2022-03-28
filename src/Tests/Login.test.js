import { sendLoginData } from '../Redux/authSlice';

describe('Login success', () => {
  test('dispatch login action', async () => {
    const thunk = sendLoginData({ username: 'admin', password: '1234' });
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(3);
  });
});
