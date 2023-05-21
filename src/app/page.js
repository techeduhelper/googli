import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-14">
        <img className="w-65" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        <Searchbar />
      </div>
      <Footer />
    </>
  )
}
