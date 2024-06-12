import Image from "next/image";
import { ProfileCard } from "./components/profile-card";
import { PostsGrid } from "./components/posts-grid";

export default function Home() {
  return (
    <main className="bg-base-background grid grid-flow-row">
      <ProfileCard /> 
      <PostsGrid />
    </main>
  );
}
