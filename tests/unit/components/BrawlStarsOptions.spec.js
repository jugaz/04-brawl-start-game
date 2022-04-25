import { shallowMount } from "@vue/test-utils";
import BrawlStarsOptions from "@/components/BrawlStarsOptions";

import { mockBrawlstars } from "../mocks/brawlstarts.mock";

describe("BrawlStarsOptions component", () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( BrawlStarsOptions, {
            props: {
                brawls: mockBrawlstars
            }
        } )
    })

    test('debe de hacer match con el snapshot',() => {
        
        expect( wrapper.html() ).toMatchSnapshot()
    
    })
    
    test('debe de mostrar las 4 opciones correctamente',() => {

        const liTags = wrapper.findAll("li")
        expect( liTags.length ).toBe(4)

        expect(liTags[0].text()).toBe('SHELLY')
        expect(liTags[1].text()).toBe('COLT')
        expect(liTags[2].text()).toBe('BULL')
        expect(liTags[3].text()).toBe('BROCK')
    
    })

    test('debe de emitir "selectionBrawlStart" con sus respectivos parámetros al hacer click',() => {
        
        const [ li1, li2, li3, li4 ] = wrapper.findAll("li")

        li1.trigger("click")
        li2.trigger("click")
        li3.trigger("click")
        li4.trigger("click")

        expect( wrapper.emitted('selectionBrawlStart').length ).toBe(4)
        expect( wrapper.emitted('selectionBrawlStart')[0] ).toStrictEqual( [1] )
        expect( wrapper.emitted('selectionBrawlStart')[1] ).toStrictEqual( [2] )
        expect( wrapper.emitted('selectionBrawlStart')[2] ).toStrictEqual( [3] )
        expect( wrapper.emitted('selectionBrawlStart')[3] ).toStrictEqual( [4] )

    
    })
    
})