import ReviewCard from "../../../../components/cards/ReviewCard";
import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 5,
    comment:
      "Absolutely adore the dress! The customization options were exactly what I needed, and the quality is beyond impressive and the fit was perfect. I'm already planning my next purchase.",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    id: 2,
    name: "Sophia Smith",
    rating: 4,
    comment:
      "Received my dream dress! Quick delivery and top-notch quality exceeded my expectations. More customization options would be icing on the cake, but overall, I'm thrilled.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    id: 3,
    name: "Isabella Brown",
    rating: 5,
    comment:
      "Exceptional customer service! Their assistance with sizing was invaluable, and the dress fits like a glove. Couldn't be happier with my purchase!",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: 4,
    name: "Olivia Davis",
    rating: 5,
    comment:
      "Absolutely impressed! The dress's quality exceeded my expectations, and the level of customization available made it truly unique. Found exactly what I was looking for.",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
];

const Reviews = () => {
  return (
    <section>
      <Container>
        <Title>Happy Customers</Title>

        <div className="grid lg:grid-cols-3 gap-12">
          {reviews?.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
