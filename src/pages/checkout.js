import Header from "../components/Header";
import Image from "next/image";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { session, useSession } from "next-auth/client";
import Currency from "react-currency-formatter";

function Checkout() {
  const itemsData = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*Left */}

        <div className="flex-grow m-5 shadow-sm md:h-52">
          <Image
            src="/images/banner2.jpg"
            objectFit="fill"
            width={2000}
            height={350}
          />
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {itemsData.length === 0
                  ? "Your Amazon Basket is empty."
                  : "Shopping Basket"}
              </h1>
              {itemsData.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
            <div className="flex flex-col bg-white p-10 shadow-md">
              {itemsData.length > 0 && (
                <>
                  <h2 className="whitespace-nowrap">
                    SubTotal ({itemsData.length} items):{" "}
                    <span className="font-bold">
                      <Currency quantity={total} currency="INR" />
                    </span>
                  </h2>
                  <button
                    disabled={!session}
                    className={`button mt-2 ${
                      !session &&
                      "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/*Right */}
      </main>
    </div>
  );
}

export default Checkout;
