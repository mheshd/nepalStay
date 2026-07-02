import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import { services } from "../data/siteData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  return (
    <>
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        text={service.description}
        image={service.image}
      />
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="grid h-16 w-16 place-items-center rounded bg-emerald-700 text-white">
              <Icon className="h-8 w-8">{service.icon}</Icon>
            </span>
            <h2 className="mt-6 text-3xl font-bold text-stone-950">
              {service.title} at NepalStay
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              {service.detail}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded bg-emerald-700 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-stone-950"
            >
              Ask About This Service
            </Link>
          </div>
          <img
            src={service.image}
            alt={service.title}
            className="h-[440px] w-full rounded-lg object-cover shadow-xl shadow-stone-200"
          />
        </div>
      </section>
    </>
  );
}
