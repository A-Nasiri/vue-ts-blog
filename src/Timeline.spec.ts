import { mount } from "@vue/test-utils";
import Home from "./Home.vue";

describe("Home", () => {
  it.only("Renders 3 time periods", () => {
    const wrapper = mount(Home);
    console.log(wrapper.html());

    expect(wrapper.findAll('[data-test="period"]')).toHaveLength(3);
  });

  it("Updates the period when clicked", async () => {
    const wrapper = mount(Home);
    const $today = wrapper.findAll('[data-test="period"]')[0];
    expect($today.classes()).toContain("is-active");

    const $thisWeek = wrapper.findAll('[data-test="period"]')[1];
    await $thisWeek.trigger("click");

    expect($today.classes()).not.toContain("is-active");
    expect($thisWeek.classes()).toContain("is-active");

    const $thisMonth = wrapper.findAll('[data-test="period"]')[2];
    await $thisMonth.trigger("click");

    expect($thisWeek.classes()).not.toContain("is-active");
    expect($thisMonth.classes()).toContain("is-active");
  });

  it("Renders todays post by default", async () => {
    const wrapper = mount(Home);

    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1);

    const $thisWeek = wrapper.findAll('[data-test="period"]')[1];
    await $thisWeek.trigger("click");
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2);

    const $thisMonth = wrapper.findAll('[data-test="period"]')[2];
    await $thisMonth.trigger("click");
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(3);
  });
});
