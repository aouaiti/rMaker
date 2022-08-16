import Container from "../../components/Layouts/Container";

export default {
  title: "Layouts/Container",
  component: Container,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

const template = (args) => <Container {...args} />;

export const Normal = template.bind({});
Normal.args = {
  backgroundColor: "blue",
};
