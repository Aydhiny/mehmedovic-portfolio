import BlogCard from "@/components/BlogCard";
import React from "react";

export default function page() {
  return (
    <div className="px-52 pb-52 justify-center cursor-default">
      <div className="text-left">
        <h1 className="font-bold text-6xl">Featured Posts</h1>
        <p className="mb-12 text-gray-300">Newest blog posts and news</p>
      </div>
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
      <p className="text-gray-300">Read all posts --</p>
    </div>
  );
}
