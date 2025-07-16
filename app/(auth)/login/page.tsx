import LoginForm from "@/components/LoginForm";
import Image from "next/image";

function page() {
  return (
    <main>
      {/* MOBILE VIEW */}
      <div className="relative h-screen px-3.5 pt-6 lg:hidden">
        <Image src="/logo.png" alt="Lendsqr logo" width={100} height={50} />

        <div className="relative z-50 mx-auto mt-6 w-[90%] space-y-[60px] md:mt-32">
          <div className="space-y-2.5">
            <h1 className="text-4xl font-bold text-[#213F7D] md:text-[40px]">
              Welcome!
            </h1>
            <p className="text-sm font-normal text-[#545F7D] md:text-xl">
              Enter details to login.
            </p>
          </div>
          <LoginForm />
        </div>

        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/loginImage.png"
            alt="login image"
            width={350}
            height={200}
            className="md:h-[350px] md:w-[500px]"
          />
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden h-screen lg:flex">
        <div className="flex flex-1/2 flex-col gap-[139px] pt-[106px]">
          <div className="px-[97px]">
            <Image src="/logo.png" alt="Lendsqr logo" width={100} height={50} />
          </div>
          <div className="px-[67px]">
            <Image
              src="/loginImage.png"
              alt="login image"
              width={500}
              height={300}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-1/2 items-center justify-center bg-[#00000008]">
          <div className="relative z-50 w-[80%] space-y-[60px] pl-[100px]">
            <div className="space-y-2.5">
              <h1 className="text-4xl font-bold text-[#213F7D] md:text-[40px]">
                Welcome!
              </h1>
              <p className="text-sm font-normal text-[#545F7D] md:text-xl">
                Enter details to login.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
