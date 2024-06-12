import { ProfileCard } from "./components/profile-card";
import { PostsGrid } from "./components/posts-grid";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts()

  return (
    <main className="bg-base-background grid grid-flow-row">
      <ProfileCard /> 
      <PostsGrid posts={allPosts} />
    </main>
  );
}
