import BlogCard from "@/components/BlogCard";

export default function Page() {
  return (
    <div className="px-12 xl:px-52 py-20">
      <h1 className="text-6xl font-bold">Blog</h1>
      <p className="text-gray-400 mb-4">
        Check out the newest blog posts from me. (You might find something
        weird).
      </p>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          name={"Hunter Mouse 2 News"}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
        <BlogCard
          name={"Why is Typescript considered better than JS?"}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
        <BlogCard
          name={"Aydhiny Beats NEW WINTER SALE!"}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
        <BlogCard
          name={"Good news in the programming world."}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
        <BlogCard
          name={"Hunter Mouse 2 News"}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
        <BlogCard
          name={"Hunter Mouse 2 News"}
          link={"Yes"}
          description={
            "Dive into the world of the spark mice! After pirates of the Bayou have taken over your land, your friends and supplies have gone into the wrong hands! Are you a good enough hunter to save your friends and to restore peace to the valley? #adventure #platformer #retro #lowpoly"
          }
          views={"53"}
        />
      </div>
    </div>
  );
}
