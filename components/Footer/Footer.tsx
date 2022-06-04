import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";

const contactLinks = [
  "About Us",
  "Careers",
  "Investors",
  "Company Blog",
  "Engineering Blog",
  "Merchant Blog",
  "Gift Cards",
  "Homebites Central",
  "Homebites Stories",
  "LinkedIn",
  "Glassdoor",
  "Accessibility",
];

const topCuisines = [
  "Pizza Near Me",
  "Chinese Food Near Me",
  "Sushi Near Me",
  "Cafe Near Me",
  "Mexican Food Near Me",
  "Thai Food Near Me",
  "Lunch Near Me",
  "Seafood Near Me",
  "Indian Food Near Me",
  "Dessert Near Me",
];

const policies = [
  "Terms of Service",
  "Privacy",
  "Notice At Collection",
  "Delivery Locations",
  "2022 Homebites",
];

const help = ["Account Details", "Order History", "Help"];

const business = [
  "Become a Driver",
  "Be a Partner Cook",
  "Get Drivers for Deliveries",
  "Get Homebites for Work",
];

const Links = (props: { links: string[] }) => {
  return (
    <ul className="my-4 flex flex-col gap-2">
      {props.links.map((link) => (
        <li
          key={link}
          className="text-gray-300 cursor-pointer hover:text-gray-100"
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white px-6">
      <div className="max-w-screen-xl flex gap-16 mx-auto py-16">
        <nav>
          <h4 className="font-semibold tracking-wide">Get to Know Us</h4>
          <Links links={contactLinks} />
        </nav>
        <nav>
          <h4 className="font-semibold tracking-wide">Top Cuisines Near You</h4>
          <Links links={topCuisines} />
        </nav>
        <nav>
          <h4 className="font-semibold tracking-wide">Let Us Help You</h4>
          <Links links={help} />
        </nav>
        <nav>
          <h4 className="font-semibold tracking-wide">Doing Business</h4>
          <Links links={business} />
        </nav>
      </div>
      <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col align-center justify-between pb-8">
        <div className="flex md:flex-row flex-col align-center gap-4">
          {policies.map((policy) => (
            <p
              key={policy}
              className="text-gray-500 font-sm cursor-pointer hover:text-gray-300"
            >
              {policy}
            </p>
          ))}
        </div>
        <ul className="flex align-center gap-2">
          <IconBrandFacebook className="text-gray-300 cursor-pointer hover:text-gray-100" />
          <IconBrandTwitter className="text-gray-300 cursor-pointer hover:text-gray-100" />
          <IconBrandInstagram className="text-gray-300 cursor-pointer hover:text-gray-100" />
        </ul>
      </div>
    </footer>
  );
}
