// handleGet

import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, content, "200", "application/json");
}

// handlePost
// parseJSONBody() will collect and parse the incoming JSON
// santizeData()
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    await addNewSighting(parsedBody);
    sendResponse(res, JSON.stringify(parsedBody), 201, "application/json");
  } catch (err) {
    sendResponse(res, JSON.stringify({ error: err }), 400, "application/json");
  }
}
