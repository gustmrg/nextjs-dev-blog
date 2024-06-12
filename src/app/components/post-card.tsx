interface PostCardProps {
    title: string
    date: string    
    excerpt: string
}

export function PostCard({ title, date, excerpt }: PostCardProps) {
    return (
        <div className="bg-base-post rounded-lg text-start p-8 space-y-4">
            <div className="flex justify-between">
                <h3 className="text-xl text-bold text-base-title">{title}</h3>
                <span className="text-sm text-base-span">{date}</span>
            </div>
            <div>
                <p className="text-base text-base-text">
                    {excerpt}
                </p>
            </div>
        </div>
    )
}