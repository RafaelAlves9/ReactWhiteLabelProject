// cypress\e2e\mocks\Autentication.mock.ts

import { TAuthenticationUserResponse } from "@response/AuthenticationResponse";

interface IAuthenticationMock{
    loginAdmin: TAuthenticationUserResponse;
};

export const AuthMock: IAuthenticationMock = {
    loginAdmin: {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVuaXF1ZV9uYW1lX21vY2siLCJuYW1laWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsIm5iZiI6MTcxMDUwNjE2NiwiZXhwIjoxNzEwNTA5MTY2LCJpYXQiOjE3MTA1MDYxNjYsImlzcyI6IkVuYWV4SWRlbnRpdHkiLCJhdWQiOiJmZmQ5ZDdlYS0zNDg0LTQwNzAtZDBmMi0wOGRjMGZjYjlhNTUifQ.ozX0ijBF1lVmV_hijroTT4uOMI2u4ygjj2QgfZxSCgw",
        refreshToken: "0000000000000000000000",
    },
};
