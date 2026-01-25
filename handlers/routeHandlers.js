import { sightingEvents } from "../events/sightingEvents.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sendResponse } from "../utils/sendResponse.js";
import { stories } from "../data/stories.js";

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

    sightingEvents.emit("sighting-added", sanitizedBody);

    sendResponse(res, JSON.stringify(parsedBody), 201, "application/json");
  } catch (err) {
    sendResponse(res, JSON.stringify({ error: err }), 400, "application/json");
  }
}

export async function handleNews(req, res) {
  res.statusCode = 200;

  /*
Challenge 1:
  1. Set Content-Type, Cache-Control, and Connection headers
*/
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length);

    /*
Challenge 2:
  1. Use res.write() to send an object to the frontend.

  The object should include:
    - an event property with a descriptive name.
    - a story chosen at random from the stories array.

  Remember, the object is contained in a string which starts with 'data: '.
  What do you need at the end of the string to signal the end of a message block?
*/

    res.write(
      `data: ${JSON.stringify({ event: "news-update", story: stories[randomIndex] })}\n\n`,
    );
  }, 3000);
}
