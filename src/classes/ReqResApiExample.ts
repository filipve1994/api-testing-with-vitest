import ky from "ky";


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

export async function login(payload: any) {
    try {
        return await ky.post("https://reqres.in" + "/api/login", {
            json: payload
        });
    } catch (error) {
        return error.response;
        // return error;
    }
}

export async function getSingleUserNotFound() {

    try {
        const response = await ky.get("https://reqres.in/api/users/23");
        console.log('response try catch is');
        console.log(response);
        console.log("---------------")

        return response;
    } catch (error) {
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

export async function getSingleUser() {
    return await ky.get("https://reqres.in" + "/api/users/2");
}

export async function getListUsers() {

    // return await ky.get("https://reqres.in" + "/api/users?page=2");
    // return await apiKy.get("?page=2");

    try {
        return await apiKy.get("users?page=2");
    } catch (error) {
        console.log('filip: catch: request failed: ');
        console.log("---------------")
        console.log(error.name);
        console.log("---------------")

        return error.response;
        // return error;
    }

}

export async function createUser(payload: any) {
    try {
        return await apiKy.post("api/users", {
            json: payload
        });
    } catch (error) {
        return error.response;
        // return error;
    }
}

export async function putUser(id: any, payload: any) {
    try {
        return await apiKy.put("api/users/" + id, {
            json: payload
        });
    } catch (error) {
        return error.response;
        // return error;
    }
}

export async function patchUser(id: any, payload: any) {
    try {
        return await apiKy.patch("api/users/" + id, {
            json: payload
        });
    } catch (error) {
        return error.response;
        // return error;
    }
}

export async function deleteUser(id: any) {
    try {
        return await apiKy.delete("api/users" + id);
    } catch (error) {
        return error.response;
    }
}

export class ReqResApiExample {

    baseUrl = "https://reqres.in/api"

    async login(payload: any) {
        try {
            return await ky.post(this.baseUrl + "/login", {
                json: payload
            });
        } catch (error) {
            return error.response;
            // return error;
        }
    }

    async getSingleUser() {
        return await ky.get(this.baseUrl + "/users/2");
    }

    async getSingleUserNotFound() {

        try {
            return await ky.get(this.baseUrl + "/users/23");
        } catch (error) {
            return error.response;
        }
    }

    async getListUsers() {

        // return await ky.get("https://reqres.in" + "/api/users?page=2");
        // return await apiKy.get("?page=2");

        try {
            return await apiKy.get("users?page=2");
        } catch (error) {
            console.log('filip: catch: request failed: ');
            console.log("---------------")
            console.log(error.name);
            console.log("---------------")

            return error.response;
        }

    }

    async createUser(payload: any) {
        try {
            return await apiKy.post("api/users", {
                json: payload
            });
        } catch (error) {
            return error.response;
        }
    }

    async putUser(id: any, payload: any) {
        try {
            return await apiKy.put("api/users/" + id, {
                json: payload
            });
        } catch (error) {
            return error.response;
        }
    }

    async patchUser(id: any, payload: any) {
        try {
            return await apiKy.patch("api/users/" + id, {
                json: payload
            });
        } catch (error) {
            return error.response;
        }
    }

    async deleteUser(id: any) {
        try {
            return await apiKy.delete("api/users" + id);
        } catch (error) {
            return error.response;
        }
    }
}