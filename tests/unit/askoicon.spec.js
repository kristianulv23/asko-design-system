import { shallowMount } from "@vue/test-utils";
import AskoIcon from "@/components/AskoIcon/AskoIcon.vue";

describe("AskoIcon.vue", () => {
  it("renders props.label when passed", () => {
    const icon = "arrow_left";
    const generateViewBox = jest.fn()
    const wrapper = shallowMount(AskoIcon, {
      propsData: { icon },
      methods: {
        generateViewBox
      }
    });
    expect(generateViewBox).toBeCalledWith("arrow_left");
  });
});
