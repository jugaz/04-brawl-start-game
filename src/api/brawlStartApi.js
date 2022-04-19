import axios from 'axios'

const brawlApi = axios.create({
    baseURL:'https://jugaz.github.io/brawl-star-api/json',
})

export default brawlApi