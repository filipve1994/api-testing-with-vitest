import {beforeAll, describe, expect, test} from 'vitest';
import {ReqResApiExample} from "@/classes/ReqResApiExample.ts";

describe("Login Feature", () => {
    let reqResApi: ReqResApiExample;

    beforeAll(() => {
        reqResApi = new ReqResApiExample();
    })

    test("Success Login", async () => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        const response = await reqResApi.login(payload);

        console.log(response);
        console.log(response.status);
        console.log(response.body);

        //ASSERTION
        expect((await response).status).to.equal(200);
    })

    test("Failed Login", async () => {
        const payload = {
            "email": "peter@klaven"
        }
        const response = await reqResApi.login(payload);

        console.log(response);
        console.log(response.status);
        console.log(response.body);

        //ASSERTION
        expect((await response.status)).to.equal(400);
    })
})

describe("get user Feature", () => {

    let reqResApi: ReqResApiExample;

    beforeAll(() => {
        reqResApi = new ReqResApiExample();
    })

    test("create single User", async () => {

        const response = await reqResApi.createUser({
            "name": "morpheus",
            "job": "leader"
        });

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        const result = await response.json();
        console.log(result);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(201);
    })

    test("put single User", async () => {

        const response = await reqResApi.putUser(2, {
            "name": "morpheus",
            "job": "zion resident"
        });

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        const result = await response.json();
        console.log(result);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(200);
    })

    test("patch single User", async () => {

        const response = await reqResApi.patchUser(2, {
            "name": "morpheus",
            "job": "zion resident"
        });

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        const result = await response.json();
        console.log(result);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(200);
    })

    test("delete single User", async () => {

        const response = await reqResApi.deleteUser(2);

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(204);
    })

    test("Get single User", async () => {

        const response = await reqResApi.getSingleUser();

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        const result = await response.json();
        console.log(result);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(200);
    })

    test("Get list of users", async () => {

        const response = await reqResApi.getListUsers();

        console.log(response);
        console.log("-----------")
        console.log(response.status);
        console.log("-----------")
        console.log(response.body);
        console.log("-----------");

        const result = await response.json();
        console.log(result);
        console.log("-----------");

        //ASSERTION
        expect((await response).status).to.equal(200);
    })

    test("Get single User Not found", async () => {

        const response = await reqResApi.getSingleUserNotFound();
        console.log("-----------")
        console.log("start logging in test")
        console.log("-----------")

        // console.log("-----------")
        // console.log("print response in test")
        // console.log("-----------")
        // console.log(response);

        // console.log("-----------")
        // console.log("print await response in test")
        // console.log("-----------")
        // console.log(await response);

        // console.log("-----------")
        // console.log("print await response.json() in test")
        // console.log("-----------")
        // console.log(await response);

        // console.log("-----------")
        // console.log("print await response.json() in test")
        // console.log("-----------")
        // console.log(await response.json()); //when error, empty body returned by .json() => {}

        // console.log("-----------")
        // console.log("print await response.status in test")
        // console.log("-----------")
        // console.log(await response.status); // 404
        // console.log(await response.statusText); //Not Found

        // console.log(response.body);
        // console.log("-----------");
        //
        // const result = await response.json();
        // console.log(result);
        // console.log("-----------");

        //ASSERTION
        expect((await response.status)).to.equal(404);
    })

})

