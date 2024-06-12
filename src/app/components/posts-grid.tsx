import { PostCard } from "./post-card"


interface Post {
    title: string
    description: string
    slug: string
    isPublished: boolean
    content?: string | null
}

export function PostsGrid() {
    const posts: Post[] = [
        {
            title: 'This is a title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, temporibus culpa beatae, architecto perspiciatis labore consequuntur magnam et ipsum quos repellendus animi delectus ipsa provident dignissimos quibusdam quia. Dignissimos, earum!',
            slug: 'this-is-a-title',
            isPublished: true            
        },
        {
            title: 'This is a title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, temporibus culpa beatae, architecto perspiciatis labore consequuntur magnam et ipsum quos repellendus animi delectus ipsa provident dignissimos quibusdam quia. Dignissimos, earum!',
            slug: 'this-is-a-title',
            isPublished: true            
        },
        {
            title: 'This is a title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, temporibus culpa beatae, architecto perspiciatis labore consequuntur magnam et ipsum quos repellendus animi delectus ipsa provident dignissimos quibusdam quia. Dignissimos, earum!',
            slug: 'this-is-a-title',
            isPublished: true            
        },
        {
            title: 'This is a title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, temporibus culpa beatae, architecto perspiciatis labore consequuntur magnam et ipsum quos repellendus animi delectus ipsa provident dignissimos quibusdam quia. Dignissimos, earum!',
            slug: 'this-is-a-title',
            isPublished: true            
        }
    ]

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
                {posts.map((post) => {
                    return <PostCard title={post.title} description={post.description} />
                })}
            </div>
        </div>
    )
}