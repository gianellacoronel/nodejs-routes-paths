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

  const extension = path.extname(filePath);

  const contentType = getContentType(extension);

  try {
    const content = await fs.readFile(path.join(filePath));
    sendResponse(res, content, 200, contentType);
  } catch (error) {
    if (error.code === "ENOENT") {
      const content = await fs.readFile(path.join(filePublicPath, "404.html"));
      sendResponse(res, content, 200, contentType);
    } else {
      sendResponse(
        res,
        `<html><h1>Server Error: ${err.code}</h1></html>`,
        500,
        "text/html",
      );
    }
  }
}
