import styles from "./page.module.css";
import Template1 from "./template1/layout";
import Template2 from "./template2/home";
import Template3 from "./template3/home";

const components: { [key: number]: React.ComponentType } = {
  0: Template1,
  // 1: Template2,
  // 2: Template3,
};

export default function Home() {
  const randomNumber = Math.floor(Math.random() * Object.keys(components).length);
  const ComponentToRender = components[randomNumber] || (() => <p>Invalid Value</p>);
  return <ComponentToRender />;
}