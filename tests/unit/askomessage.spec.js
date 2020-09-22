import { shallowMount } from "@vue/test-utils";
import AskoMessage from "@/components/AskoMessage/AskoMessage.vue";

describe("AskoMessage.vue", () => {
  it("renders props.label when passed", () => {
    const heading = "AskoMessage";
    const wrapper = shallowMount(AskoMessage, {
      propsData: { heading }
    });
    expect(wrapper.text()).toMatch(heading);
  });
});
