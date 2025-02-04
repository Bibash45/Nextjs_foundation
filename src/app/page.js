import Image from "next/image";
import pic from "../../public/images/nitro15.jpg"

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      {/* <img src="images/nitro15.jpg" className="img-fluid rounded-top" alt="" /> */}
      <Image src={pic} 
      width={500}
      height={300}
      />
    </div>

  );
}
