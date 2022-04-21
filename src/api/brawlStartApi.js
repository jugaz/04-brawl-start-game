import axios from 'axios'

const brawlApi = axios.create({
    baseURL:'https://jugaz.github.io/brawl-start-api/json',
})

export default brawlApi