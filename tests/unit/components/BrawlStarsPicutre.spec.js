import { shallowMount } from "@vue/test-utils";
import BrawlStarsPicutre from "@/components/BrawlStarsPicutre";

describe("BrawlStarsPicutre component", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(BrawlStarsPicutre, {
      props: {
        brawlStartId: 1,
        showBrawlStart: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe mostrar la imagen oculta y el brawlstart 50", () => {
    const wrapper = shallowMount(BrawlStarsPicutre, {
      props: {
        brawlStartId: 50,
        showBrawlStart: false,
      },
    });

    const [ img1, img2 ] = wrapper.findAll("img")


    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    
    expect( img1.classes('hidden-brawlstars') ).toBeTruthy()
    expect( img1.attributes ).toBeTruthy()

    expect( img1.attributes("src") ).toBe('https://jugaz.github.io/brawl-start-api/images/50.png')
    
  });

  test("debe de mostar el brawlstart si el showBrawlStart:true", () => {

    const wrapper = shallowMount(BrawlStarsPicutre, {
        props: {
          brawlStartId: 50,
          showBrawlStart: true,
        },
      });
  
      const img1 = wrapper.find("img");
  
      expect(img1.exists()).toBeTruthy();
      
      expect( img1.classes('hidden-brawlstars') ).toBe(false);
      expect( img1.classes('fade-in') ).toBe(true);
  });
});
