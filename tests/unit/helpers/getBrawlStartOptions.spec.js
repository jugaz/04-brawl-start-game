import getBrawlStartOptions, { getBrawlStars, getBrawlStarsNames } from "@/helpers/getBrawlStartOptions";

describe('getBrawlStartOptions helpers',() => {

    test('debe de regresar un arreglo de numeros',() => {

        const brawl = getBrawlStars()
        
        expect(brawl.length).toBe(55)
        expect(brawl[0]).toBe(1)
        expect(brawl[40]).toBe(41)
        expect(brawl[54]).toBe(55)
    
    })

    test('debe de retonar un arreglo de 4 elementos con nombre de brawlstart', async () => {
        const brawl = await getBrawlStarsNames([1,2,3,4])

        expect(brawl).toStrictEqual([
            { name: 'SHELLY', id: '1' },
            { name: 'COLT', id: '2' },
            { name: 'BULL', id: '3' },
            { name: 'BROCK', id: '4' }
        ])
    
    })
    

    test('getBrawlStartOptions debe retonar un arreglo mezclado', async() => {
        
        const brawl = await getBrawlStartOptions()

        expect(brawl.length).toBe(4)

        expect(brawl).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(String),
            },

            { 
                name: expect.any(String), 
                id: expect.any(String), 
            },

            { 
                name: expect.any(String),
                id: expect.any(String),
            },

            { 
                name: expect.any(String),
                id: expect.any(String),
            }
        ])
        
    
    })
    
    

})