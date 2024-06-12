import { Post } from "@/interfaces/post";
import { PostCard } from "./post-card"

type PostsGridProps = {
    posts: Post[];
}

export function PostsGrid({ posts }: PostsGridProps ) {
    return (
        <div className="mx-60 my-10 space-y-10">
            <div className="space-y-4">
                <div className="flex justify-between">
                    <p className="text-base-subtitle text-lg font-bold">Publicações</p>
                    <span className="text-base-span">6 publicações</span>
                </div>
                <div className="flex">
                    <input 
                        type="text" 
                        placeholder="Buscar conteúdo" 
                        className="flex-1 rounded-md px-4 py-3 text-base-text bg-base-input border border-base-border placeholder:text-base-label focus:outline-none focus:text-base-text focus:border-base-blue" 
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {posts.length > 0 && posts.map((post) => {
                    return <PostCard 
                                key={post.slug} 
                                title={post.title}
                                excerpt={post.excerpt}
                                date={post.date}
                            />
                })}
            </div>
        </div>
    )
}