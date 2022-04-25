import brawlStartApi from '@/api/brawlStartApi'

describe('brawlStartApi',() => {
    test('axios debe de estar configurado con el api de brawlstart',() => {

        expect(brawlStartApi.defaults.baseURL)
            .toBe('https://jugaz.github.io/brawl-start-api/json')
    
    })
    

})