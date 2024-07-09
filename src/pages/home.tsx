import Hero from "../components/hero";

export default function Home() {
  const clients = ["Google", "honeywell", "wellsforgo", "HTS"];
  return (
    <div className="w-full">
      <Hero title="Right resources" subtitle="at the right time." />
      <div className="w-full pl-5 grid grid-cols-2 gap-5">
        <div>
          <p className="font-bold underline pt-2 pb-2">
            Experience HR Services
          </p>
          <p>
            HR Giants is your technology and business solutions provider
            dedicated to deliver the right resource at the right time. We work
            closely with our clients to thoroughly understand their business
            goals and how they can use technology to obtain those goals.
          </p>
          <p>
            <ul className="list-disc">
              <li>
                Any business would be successful provided RIGHT people are
                hired. And that is where HR Giants specialize in.
              </li>
              <li>
                We supply highly qualified professionals to clients to meet
                their organization business and IT goals.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <p className="font-bold">
            We provide Quality resources in the following fields:
          </p>
          <ul className="list-disc">
            <li>Project Management </li>
            <li>Business Analysis</li>
            <li> Data Analysis </li>
            <li>Software Development</li>
            <li> Full Stack Engineers</li>
            <li> QA Consultants</li>
            <li> Architects </li>
            <li>DBAs</li>
            <li>System Admins</li>
            <li> Data Warehousing</li>
            <li> Ecommerce </li>
            <li>Consultants</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-bold uppercase text-xl">Clients</div>
        <div className="flex justify-between">
          {clients &&
            clients.map((item) => {
              return <div>{item}</div>;
            })}
        </div>
      </div>
    </div>
  );
}
