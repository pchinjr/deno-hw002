// src/http/get-index/index.ts
export async function handler(req: object) {
  console.log(req);
  // access environment variables
  const env = Deno.env.toObject();
  // Deno has browser compatible fetch() built in!
  let data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${env.NASA_KEY}`,
  ).then((response) => response.json());
  // return an HTML string
  let body = `<!doctype html><html lang=en>
  <head><meta charset=utf-8><title>Hi!</title></head>
  <body>
  <h1 class="center-text">Praise NASA!</h1>
  <p><img src="${data.url}" /></p>
  <p class="center-text">
  Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!
  </p>
  </body>
  </html>
  `;
  // the response of our function
  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body,
  };
}
