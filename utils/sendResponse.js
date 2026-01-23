export function sendResponse(res, content, statusCode, contentType) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  res.end(content);
}
