const Tags = ({ tag, className }: { tag: string, className?: string }) => [
    <div className={`rounded-3xl border-2 w-fit ${className}`} key={tag}>
        {tag}
    </div>
]

export default Tags