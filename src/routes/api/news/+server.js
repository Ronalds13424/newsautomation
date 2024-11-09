import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY;
    const category = url.searchParams.get('category') || 'general';
    const country = url.searchParams.get('country') || 'us';
    const limit = url.searchParams.get('limit') || 10;
    
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}&countries=${country}&limit=${limit}`;
    
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.error) {
            return json({ error: data.error }, { status: 400 });
        }

        return json(data);
    } catch (error) {
        return json({ error: 'Unable to fetch news at this time' }, { status: 500 });
    }
}
