// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios')

async function getData(url) {
  const response = await axios.get(url)
  return response.data
}

export default async function handler(req, res) {
  const url = 'https://randomuser.me/api/?results=10&seed=0c1e7cd648bc2e13';
  const data = await getData(url);
  res.status(200).json(data);
}