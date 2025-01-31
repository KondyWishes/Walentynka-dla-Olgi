import Header from "./components/Header";
import Images from "./components/Images";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center p-2">
      <Header />
      <section>
        <Images />
      </section>
    </main>
  );
};

export default App;
