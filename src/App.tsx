import Header from "./components/Header";
import Images from "./components/Images";
import Paragraphs from "./components/Paragraphs";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center p-2 gap-8">
      <Header />
      <section>
        <Images />
      </section>
      <section className="flex flex-col justify-center items-center gap-8 w-full md:w-3/4 lg:w-1/2">
        <Paragraphs />
        <div className="flex justify-center items-stretch gap-2">
          <img
            src="/images/olga_serce.png"
            alt="Olga serce"
            className="heart-img"
          />
          <img
            src="/images/kondy_serce2.png"
            alt="Kondy serce"
            className="heart-img scale-x-[-1]"
          />
        </div>
      </section>
    </main>
  );
};

export default App;
