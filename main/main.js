import Header from '../components/header';
import Trending from '../components/trending';
import Collections from '../components/collection';

const main = () => {
  return (
    <main className="bg-black  min-h-screen">
      <Header />
      <Trending />
      <Collections />
    </main>
  );
};

export default main;
