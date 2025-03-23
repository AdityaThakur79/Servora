import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] =
  [
    {
      "image": "https://dellcube-stg.vercel.app/images/user/common/dellcube-favicon.png",
      "name": "Dellcube",
      "userName": "Logistic Company",
      "comment": "Servora played a pivotal role in transforming our software infrastructure, delivering high-performance solutions that exceeded our expectations!"
    },

    {
      "image": "https://khoj-job.com/images/logo.png",
      "name": "Khoj",
      "userName": "Job Portal",
      "comment": "Servora built a feature-rich, scalable job platform that made hiring faster, smarter, and more efficient for our clients!"
    },
    {
      "image": "https://ctrlclothing.in/wp-content/uploads/2025/03/cropped-FINAL-LOGO.png",
      "name": "Custom Clothing",
      "userName": "Fashion Brand",
      "comment": "Servora’s e-commerce expertise helped us streamline operations, optimize inventory, and boost online sales like never before!"
    },


    {
      "image": "https://family-tree.com/images/logo.png",
      "name": "Family Tree",
      "userName": "Restaurant",
      "comment": "Servora crafted an intuitive, data-driven platform that simplified family history research and connected generations effortlessly!"
    },
    {
      "image": "https://www.welinkjobs.com/static/media/welinkjobs-og-logo.a989d08c1f7fc38011fb.png",
      "name": "WeLink Job",
      "userName": "Job Portal",
      "comment": "Servora’s cutting-edge job portal solutions enhanced our platform, improving candidate experience and recruiter engagement seamlessly!"
    },
    {
      "image": "https://yourturf.com/images/logo.png",
      "name": "Your Turf",
      "userName": "Turf",
      "comment": "Servora’s expertise helped us build a seamless property listing platform, enhancing user engagement and driving more conversions!"
    }
  ];


export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>{name}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
