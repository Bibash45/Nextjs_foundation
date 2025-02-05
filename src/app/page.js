import Image from "next/image";
import pic from "../../public/images/nitro15.jpg"
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <h1>Hello</h1>
      {/* <img src="images/nitro15.jpg" className="img-fluid rounded-top" alt="" /> */}
      <Image src={pic} 
      width={500}
      height={300}
      alt="image"
      />
    </div>

  );
}
