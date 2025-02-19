import { API_KEY, BEFORE_ALL_TIMEOUT, HOST } from '@utils/env';
import { queryParams } from '@utils/query-params';
import { formatISO, subDays } from 'date-fns';
import { beforeAll, describe, expect, test } from 'vitest';
import { z } from 'zod';

// All properties are required by default
const schema = z.object({
  copyright: z.string(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  // Custom validation logic via refinements https://zod.dev/?id=refine
  media_type: z.string().refine((value) => value === 'image'),
  service_version: z.string(),
  title: z.string(),
  url: z.string(),
});

const now = new Date();

const urlQuery = {
  date: formatISO(subDays(now, 1), { representation: 'date' }),
  api_key: API_KEY,
};

const ENDPOINT = '/planetary/apod';

// Describe consists from a variables to show the request in the output:
// «Request https://api.nasa.gov/planetary/apod?date=2022-06-05&api_key=DEMO_KEY»
describe(`Request ${HOST}${ENDPOINT}?${queryParams(urlQuery)}`, () => {
  let response: Response;
  let body: { [key: string]: unknown };

  beforeAll(async () => {
    const url = `${HOST}${ENDPOINT}?${queryParams(urlQuery)}`;
    response = await fetch(url);
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type = application/json', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json');
  });

  test('Should have valid body schema', () => {
    // https://vitest.dev/api/expect.html#tothrowerror
    expect(() => schema.parse(body)).not.toThrowError();
  });
});
