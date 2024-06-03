import { testimonials } from "../../../constants/data";
import Heading from "../../atoms/Heading";

const Testimonials = () => {
  return (
    <section className="mt-20">
      <Heading text="Apa yang mereka katakan tentang kami?" />
      <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="h-[133px] w-80 rounded-md bg-primary-50 px-4 py-3"
          >
            <div className="mb-2 flex items-center gap-1.5">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full"
                width={31}
                height={31}
              />
              <div>
                <h5 className="text-base font-semibold">{testimonial.name}</h5>
                <h6 className="text-xs">@{testimonial.username}</h6>
              </div>
            </div>
            <p className="text-xs">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
