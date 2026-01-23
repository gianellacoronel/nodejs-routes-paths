import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(baseDir, req, res) {
  const filePublicPath = path.join(baseDir, "public");
  const filePath = path.join(
    filePublicPath,
    req.url === "/" ? "index.html" : req.url,
  );

  try {
    const content = await fs.readFile(filePath);
    const extension = path.extname(filePath);

    const contentType = getContentType(extension);

    sendResponse(res, content, 200, contentType);
  } catch (error) {
    console.log(error);
  }
}
