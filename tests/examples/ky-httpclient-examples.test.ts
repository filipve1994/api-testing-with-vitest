import {describe, expect, test} from 'vitest';
import ky from 'ky';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const apiKy = ky.create({
    prefixUrl: "https://reqres.in/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

async function login(payload: any) {
    try {
        return await ky.post("https://reqres.in" + "/api/login", {
            json: payload
        });
    } catch(error) {
        return error.response;
        // return error;
    }
}

async function getSingleUser() {
    return await ky.get("https://reqres.in" + "/api/users/2");
}

async function getSingleUserNotFound() {

    try {
        const response = await ky.get("https://reqres.in/api/users/23");
        console.log('response try catch is');
        console.log(response);
        console.log("---------------")

        return response;
    } catch(error) {
        console.log('filip: catch: request failed: ');
        // console.log('filip: catch: request failed: ', error);
        console.log("---------------")
        console.log(error.name);
        console.log("---------------")
        // console.error('filip: catch: request failed: ', error);

        // if(error.name === 'HTTPError') {
        //     return await error.response.json();
        // }

        // return error;
        return error.response;
    }


}

async function getListUsers() {

    // return await ky.get("https://reqres.in" + "/api/users?page=2");
    // return await apiKy.get("?page=2");

    try {
        return await apiKy.get("users?page=2");
    } catch(error) {
        console.log('filip: catch: request failed: ');
        console.log("---------------")
        console.log(error.name);
        console.log("---------------")

        return error.response;
        // return error;
    }

}

async function createUser(payload: any) {
    try {
        return await apiKy.post("api/users", {
            json: payload
        });
    } catch(error) {
        return error.response;
        // return error;
    }
}

async function putUser(id: any, payload: any) {
    try {
        return await apiKy.put("api/users/" + id, {
            json: payload
        });
    } catch(error) {
        return error.response;
        // return error;
    }
}

async function patchUser(id: any, payload: any) {
    try {
        return await apiKy.patch("api/users/" + id, {
            json: payload
        });
    } catch(error) {
        return error.response;
        // return error;
    }
}

async function deleteUser(id: any) {
    try {
        return await apiKy.delete("api/users" + id);
    } catch(error) {
        return error.response;
        // return error;
    }
}

describe("Login Feature", () => {

    test("Success Login", async () => {
        const payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        const response = await login(payload);

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
        const response = await login(payload);

        console.log(response);
        console.log(response.status);
        console.log(response.body);

        //ASSERTION
        expect((await response.status)).to.equal(400);
    })
})

describe("get user Feature", () => {

    test("create single User", async () => {

        const response = await createUser({
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

        const response = await putUser(2, {
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

        const response = await patchUser(2, {
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

        const response = await deleteUser(2);

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

        const response = await getSingleUser();

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

        const response = await getListUsers();

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

        const response = await getSingleUserNotFound();
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

