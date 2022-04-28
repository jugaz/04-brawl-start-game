import { shallowMount, mount } from "@vue/test-utils"
import BrawlStarsPage from "@/pages/BrawlStarsPage"

import { mockBrawlstars } from "../mocks/brawlstarts.mock";


describe('BrawlStarsPage component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( BrawlStarsPage )
        
    })

    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()    
    
    })

    test('debe de llamar mixBrawlsArray al montar', () => {

        const mixBrawlsArraySpy = jest.spyOn( BrawlStarsPage.methods, 'mixBrawlsArray' )
        const wrapper = shallowMount( BrawlStarsPage )

        expect( mixBrawlsArraySpy ).toHaveBeenCalled() 
    })

    test('debe de hacer match con el snapshot cuando cargan los brawls',() => {
    
        const wrapper = shallowMount( BrawlStarsPage, {

            data() {
                return {
                    brawlStartArr: mockBrawlstars,
                    brawl: mockBrawlstars[0],
                    showBrawlStart: false,
                    showAnswer:false,
                    message:'',
                }
            },
        
        })

        expect( wrapper.html() ).toMatchSnapshot()  
    
    })
    
    test('debe de mostrar los componentes de BrawlStarsPicutre y BrawlStarsOptions',() => {
    


          const wrapper = shallowMount( BrawlStarsPage, {

            data() {
                return {
                    brawlStartArr: mockBrawlstars,
                    brawl: mockBrawlstars[0],
                    showBrawlStart: false,
                    showAnswer:false,
                    message:'',
                }
            },
        })

        const picture = wrapper.find('brawl-stars-picutre-stub')
        const options = wrapper.find('brawl-stars-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        expect(picture.attributes('brawlstartid')).toBe("1")
        expect(options.attributes('brawls')).toBeTruthy()
    })

    test('pruebas con checkAnswer ', async () => {
        const wrapper = shallowMount( BrawlStarsPage, {

            data() {
                return {
                    brawlStartArr: mockBrawlstars,
                    brawl: mockBrawlstars[0],
                    showBrawlStart: false,
                    showAnswer:false,
                    message:'',
                }
            },
        })

    
        await wrapper.vm.checkAnswer(1)
        
        expect( wrapper.find('h2').exists() ).toBeTruthy()
        expect( wrapper.vm.showBrawlStart ).toBeTruthy()
        expect( wrapper.find('h2').text() ).toBe(`Excelente, era ${ mockBrawlstars[0].name }`)
    
        await wrapper.vm.checkAnswer(10)
        expect( wrapper.vm.message ).toBe(`Oops, era ${  mockBrawlstars[0].name }`)
    })
    
    
    

})