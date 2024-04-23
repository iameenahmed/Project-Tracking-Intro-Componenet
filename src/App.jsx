import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="relative min-h-screen p-2 font-Barlow before:absolute before:right-0 before:top-0 before:h-[52.5%] before:w-[49%] before:rounded-bl-[3.5rem] before:bg-LightGrayishBlue md:overflow-hidden md:px-16 md:py-10 lg:pt-16 xl:px-[10.25rem]">
      <div className="relative">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
export default App;
