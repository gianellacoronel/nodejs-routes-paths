// handleGet

import { getData } from "../utils/getData.js";
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

/*
Challenge:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.
*/

export function handlePost(req, res) {
  console.log("POST request received");
}
