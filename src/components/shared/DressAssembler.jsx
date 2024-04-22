import mannequin from "../../assets/images/custom-dress/mannequin.png";

import boat from "../../assets/images/custom-dress/bodice/boat.png";
import scoop from "../../assets/images/custom-dress/bodice/scoop.png";
import square from "../../assets/images/custom-dress/bodice/square.png";
import sweetheart from "../../assets/images/custom-dress/bodice/sweetheart.png";

import bell from "../../assets/images/custom-dress/sleeve/bell.png";
import bishop from "../../assets/images/custom-dress/sleeve/bishop.png";
import fitted from "../../assets/images/custom-dress/sleeve/fitted.png";
import flutter from "../../assets/images/custom-dress/sleeve/flutter.png";

import circle from "../../assets/images/custom-dress/skirt/circle.png";
import halfCircle from "../../assets/images/custom-dress/skirt/halfCircle.png";
import threeFourthCircle from "../../assets/images/custom-dress/skirt/threeFourthCircle.png";
import pleated from "../../assets/images/custom-dress/skirt/pleated.png";

const DressAssembler = ({ bodice = "", sleeve = "", skirt = "" }) => {
  let sleeveImage = null;
  switch (sleeve) {
    case "Bell":
      sleeveImage = bell;
      break;
    case "Bishop":
      sleeveImage = bishop;
      break;
    case "Fitted":
      sleeveImage = fitted;
      break;
    case "Flutter":
      sleeveImage = flutter;
      break;
    default:
      sleeveImage = null;
  }

  let bodiceImage = null;
  switch (bodice) {
    case "Boat":
      bodiceImage = boat;
      break;
    case "Scoop":
      bodiceImage = scoop;
      break;
    case "Square":
      bodiceImage = square;
      break;
    case "Sweetheart":
      bodiceImage = sweetheart;
      break;
    default:
      bodiceImage = null;
  }

  let skirtImage = null;
  switch (skirt) {
    case "Circle":
      skirtImage = circle;
      break;
    case "1/2 Circle":
      skirtImage = halfCircle;
      break;
    case "3/4 Circle":
      skirtImage = threeFourthCircle;
      break;
    case "Pleated":
      skirtImage = pleated;
      break;
    default:
      skirtImage = null;
  }

  return (
    <div className="relative">
      <img src={mannequin} alt="" />
      {sleeveImage && (
        <img src={sleeveImage} alt="" className="absolute top-0" />
      )}
      {bodiceImage && (
        <img src={bodiceImage} alt="" className="absolute top-0" />
      )}
      {skirtImage && <img src={skirtImage} alt="" className="absolute top-0" />}
    </div>
  );
};

export default DressAssembler;
