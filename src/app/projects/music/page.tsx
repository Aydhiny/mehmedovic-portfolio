import Header from "./Header";
import MusicCard from "@/components/MusicCard";
import Bona from "@images/projects/2bona.jpg";
import Bread from "@images/projects/bread.jpg";
import Vozis from "@images/projects/vozis.jpg";
import Hanoi from "@images/projects/hanoi.jpg";
export default function Page() {
  return (
    <div>
      <Header />
      <div className="px-6 xl:px-48 text-center items-center">
        <h4 className="py-4 font-bold text-2xl sm:text-3xl text-white">
          Music Production Projects
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MusicCard
            text="2Bona - Candy"
            link="link"
            image={Bona}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
          <MusicCard
            text="Shark Puppet x YBN NAHMIR - Gettin Bread"
            link="link"
            image={Bread}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny x Call Me G"
          />
          <MusicCard
            text="Danči - Voziš"
            link="link"
            image={Vozis}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny"
          />
          <MusicCard
            text="Hanoi Capital - Charles & Panda"
            link="link"
            image={Hanoi}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
        </div>
      </div>
    </div>
  );
}