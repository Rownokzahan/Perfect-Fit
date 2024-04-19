import boat from "../assets/images/customize-options/boat.png";
import sweetheart from "../assets/images/customize-options/sweetheart.png";
import scoop from "../assets/images/customize-options/scoop.png";
import square from "../assets/images/customize-options/square.png";
import flutter from "../assets/images/customize-options/flutter.png";
import bell from "../assets/images/customize-options/bell.png";
import bishop from "../assets/images/customize-options/bishop.png";
import fitted from "../assets/images/customize-options/fitted.png";
import circle from "../assets/images/customize-options/circle.png";
import threeFourthCircle from "../assets/images/customize-options/3_4_circle.png";
import halfCircle from "../assets/images/customize-options/1_2_circle.png";
import pleated from "../assets/images/customize-options/pleated.png";

const customizeOptions = [
  {
    name: "Bodice",
    key: "bodice",
    types: [
      {
        image: boat,
        name: "Boat",
        value: "boat",
      },
      {
        image: sweetheart,
        name: "Sweetheart",
        value: "sweetheart",
      },
      {
        image: scoop,
        name: "Scoop",
        value: "scoop",
      },
      {
        image: square,
        name: "Square",
        value: "square",
      },
    ],
  },
  {
    name: "Sleeve",
    key: "sleeve",
    types: [
      {
        image: flutter,
        name: "Flutter",
        value: "flutter",
      },
      {
        image: bell,
        name: "Bell",
        value: "bell",
      },
      {
        image: bishop,
        name: "Bishop",
        value: "bishop",
      },
      {
        image: fitted,
        name: "Fitted",
        value: "fitted",
      },
    ],
  },
  {
    name: "Skirt Style",
    key: "skirt",
    types: [
      {
        image: circle,
        name: "Circle",
        value: "circle",
      },
      {
        image: threeFourthCircle,
        name: "3/4 Circle",
        value: "threeFourthCircle",
      },
      {
        image: halfCircle,
        name: "1/2 Circle",
        value: "halfCircle",
      },
      {
        image: pleated,
        name: "Pleated",
        value: "pleated",
      },
    ],
  },
];

export default customizeOptions;
