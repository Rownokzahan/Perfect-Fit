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
    types: [
      {
        image: boat,
        name: "Boat",
      },
      {
        image: sweetheart,
        name: "Sweetheart",
      },
      {
        image: scoop,
        name: "Scoop",
      },
      {
        image: square,
        name: "Square",
      },
    ],
  },
  {
    name: "Sleeve",
    types: [
      {
        image: flutter,
        name: "Flutter",
      },
      {
        image: bell,
        name: "Bell",
      },
      {
        image: bishop,
        name: "Bishop",
      },
      {
        image: fitted,
        name: "Fitted",
      },
    ],
  },
  {
    name: "Skirt Style",
    types: [
      {
        image: circle,
        name: "Circle",
      },
      {
        image: threeFourthCircle,
        name: "3/4 Circle",
      },
      {
        image: halfCircle,
        name: "1/2 Circle",
      },
      {
        image: pleated,
        name: "Pleated",
      },
    ],
  },
];


export default customizeOptions;
