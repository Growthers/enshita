<<<<<<< HEAD:front/.storybook/preview.js
import "../src/styles/global.scss";
=======
import "~/styles/global.scss";
import "destyle.css";
>>>>>>> fbd97ef1d3c30dcea128090c2c655cac8be592dd:client/.storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
