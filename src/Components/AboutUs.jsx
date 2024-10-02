import bg from '../assets/aboutus.jpg';

function AboutUs() {
  return (
    <section>
        <div className="pt-48 min-h-screen flex flex-col justify-center items-center" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="max-w-5xl text-center px-4">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-8">
            Welcome to <strong>DONO</strong>, where generosity meets purpose! We are a community-driven platform committed to connecting those in need with those willing to give. Our goal is simple: to help individuals in underserved communities by providing them with essential items—free of charge. Whether you're here to donate or receive, we believe that every act of kindness helps create a ripple effect, spreading hope and goodwill. Join us in making a difference, one donation at a time!
          </p>

          <h2 className="mt-20 text-3xl font-semibold mb-4" id="faq">FAQ</h2>
          <ul className="text-left list-disc list-inside mb-8">
            <li className="mb-4">
              <strong>What is DONO?</strong> <br />
              DONO is an online platform where people can donate items to those in need for free. Donators list items they wish to give away, and receivers can claim these items directly from the website.
            </li>
            <li className="mb-4">
              <strong>How can I donate items?</strong> <br />
              It's simple! Just create an account, list the items you want to donate, and wait for someone in need to claim them.
            </li>
            <li className="mb-4">
              <strong>Who can receive donations?</strong> <br />
              Anyone in need can create an account and browse the available items. Once they find something they need, they can request it directly from the donor.
            </li>
            <li className="mb-4">
              <strong>Is there a cost to donate or receive items?</strong> <br />
              No, DONO is completely free for both donators and receivers.
            </li>
            <li className="mb-4">
              <strong>How do the blessings work?</strong> <br />
              Each time you donate an item, you receive +10 blessings. These blessings can be redeemed for rewards through our platform, such as discounts or vouchers from partner businesses.
            </li>
            <li className="mb-4">
              <strong>Is my personal information secure?</strong> <br />
              We take privacy and security seriously. Your information is used only for donation-related purposes and is never shared with third parties.
            </li>
          </ul>

          <h2 className="mt-20 text-3xl font-semibold mb-4" id="mission">Our Mission</h2>
          <p className="text-lg">
            At <strong>DONO</strong>, our mission is to foster a world where resources are shared with compassion and no one is left in need. We believe in empowering communities by facilitating the redistribution of goods, ensuring that everyone has access to the essentials for a better life. Through the kindness of our donors and the resilience of those receiving, we aim to build stronger, more connected societies where generosity flourishes.
          </p>
        </div>
        </div>
    </section>
  );
}

export default AboutUs;
