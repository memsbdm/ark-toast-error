import { toaster } from "./toaster.ts";
import Toaster from "./toaster.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  title: "Atoms/Toast",
};

export default meta;

export const Base: StoryFn<typeof Toaster> = (args: any) => ({
  components: { Toaster },
  setup() {
    const createToast = () => {
      toaster.create({ title: "Hello", description: "World" });
    };
    return { args, createToast };
  },
  template: `
    <div>
      <button @click="createToast">Create Toast</button>
      <Toaster v-bind="args" />
    </div>
  `,
});
