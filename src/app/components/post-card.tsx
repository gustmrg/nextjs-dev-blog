interface PostCardProps {
    title: string
    description: string    
}

export function PostCard({ title, description }: PostCardProps) {
    return (
        <div className="bg-base-post rounded-lg text-start p-8 space-y-4">
            <div className="flex justify-between">
                <h3 className="text-xl text-bold text-base-title">{title}</h3>
                <span className="text-sm text-base-span">Há 1 dia</span>
            </div>
            <div>
                <p className="text-base text-base-text">
                    {description}
                </p>
            </div>
        </div>
    )
}