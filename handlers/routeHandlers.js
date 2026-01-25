import { sightingEvents } from "../events/sightingEvents.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, content, "200", "application/json");
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedBody = sanitizeInput(parsedBody);
    await addNewSighting(sanitizedBody);

    /*
    Challenge 2
    1. At the top of this file, import the event emitter you have created.
    2. Use it to emit a ‘sighting-added’ event.
       What information does the listener function need?
    3. Add a sighting to test!
    */

    sightingEvents.emit("sighting-added", sanitizedBody);

    sendResponse(res, JSON.stringify(parsedBody), 201, "application/json");
  } catch (err) {
    sendResponse(res, JSON.stringify({ error: err }), 400, "application/json");
  }
}
