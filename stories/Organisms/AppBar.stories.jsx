import AppBar from "../../components/Organisms/AppBar";

export default {
  title: "Organisms/Application bar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
};

const template = (args) => <AppBar {...args} />;

export const Normal = template.bind({});
Normal.args = {};
