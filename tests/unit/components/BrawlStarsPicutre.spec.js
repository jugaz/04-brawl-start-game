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

    expect(wrapper.html()).toMatchInlineSnapshot(
      `<div class="brawlstars-container"><img src="https://jugaz.github.io/brawl-start-api/images/1.png" class="hidden-brawlstars" alt="brawlstars"></div>`
    );
  });

  test("debe mostrar la imagen oculta y el brawlstart 50", () => {});

  test("debe de mostar el brawlstart si el showBrawlStart:true", () => {});
});
