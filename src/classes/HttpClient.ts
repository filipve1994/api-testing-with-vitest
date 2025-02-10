import {IHttpClient} from "@/classes/IHttpClient.ts";
import ky, {HTTPError, KyInstance} from "ky";

export interface getParameters {
    url: string;
}

export interface postParameters<T> {
    url: string;
    payload: T;
}

export class HttpClient implements IHttpClient {


    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    // createKyInstance(baseUrl: string): KyInstance {
    getKyInstance(baseUrl: string = "https://reqres.in/api"): KyInstance {
        const apiKy = ky.create({
            prefixUrl: baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return apiKy;
    }

    async getRequest(url: string) {
        try {
            return await this.getKyInstance("https://reqres.in/api")
                .get(url);
        } catch (error: unknown) {
            console.log("---------------")
            console.log(error.name);
            console.log("---------------")

            if (error instanceof HTTPError) {
                // if (error.name === 'HTTPError') {
                console.log(error.message);
                // return await error.response.json();

                return error.response;
            }

            // return error.response;
            // return error;
        }
    }

    async postRequest(url: string, payload: T) {
        try {
            return await this.getKyInstance("https://reqres.in/api")
                .post(url, {
                    json: payload
                });
        } catch (error) {
            if (error instanceof HTTPError) {
                // if (error.name === 'HTTPError') {
                console.log(error.message);
                // return await error.response.json();

                return error.response;
            }

            // return error.response;
            // return error;
        }
    }

}