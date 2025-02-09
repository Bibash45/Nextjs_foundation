"use client";
import Image from "next/image";
import pic from "../../public/images/nitro15.jpg";
import Menu from "@/components/Menu";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const Goto = () => {
    router.push("/about");
  };

  console.log(process.env.NEXT_PUBLIC_API_KEY); // Ensure the API key is prefixed

  return (
    <div>
      <Menu />
      <h1>Hello</h1>
      <Image src={pic} width={500} height={300} alt="A descriptive alt text for the image" />
      <button className="p-2 bg-green-500 text-white" onClick={Goto} aria-label="Go to About page">
        Push
      </button>
      <button
        className="p-2 bg-yellow-500 text-white"
        onClick={() => {
          router.replace("/about");
        }}
        aria-label="Replace current page with About page"
      >
        Replace
      </button>
      <button
        className="p-2 bg-blue-500 text-white"
        onClick={() => {
          router.refresh();
        }}
        aria-label="Refresh the current page"
      >
        Refresh
      </button>
      <button
        className="p-2 bg-red-500 text-white"
        onClick={() => {
          router.push("/about?name=laptop&price=200");
        }}
        aria-label="Push to About page with query parameters"
      >
        Push with query
      </button>
      <h1>API KEY: {process.env.NEXT_PUBLIC_API_KEY}</h1>
    </div>
  );
}