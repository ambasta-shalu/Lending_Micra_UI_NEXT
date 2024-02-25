export async function getBlogPostById(id: string) {
    const res = await fetch(`${process.env.API_END_POINT}/posts?userId=${id}`)
    if (!res.ok) throw new Error('failed to fetch blog post')
    return res.json()
}

export async function getBlogPosts() {
    const res = await fetch(`${process.env.API_END_POINT}/posts`)

    if (!res.ok) throw new Error('failed to fetch blog post')
    return res.json()
}