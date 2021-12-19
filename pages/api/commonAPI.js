// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function biodata() {
  const response = await fetch("http://localhost:1337/biography").then((data) =>
    data.json()
  );
  return response;
}

export default biodata;
