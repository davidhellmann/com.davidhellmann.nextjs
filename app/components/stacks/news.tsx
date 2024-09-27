import { getClient } from '@/lib/apollo-client'
import { GetNewsEntries } from "@/graphql/queries/entries/news"

export default async function StackNews() {
    const { data, error } = await getClient().query({
        query: GetNewsEntries,
        variables: {
            section: ["home", "news", "pages"],
        }
    })

    if (error) {
        console.error('GraphQL Error:', error);
        return <p>Error: {error.message}</p>
    }

    const { entries } = data
    console.log(entries)

    if (!data || !data.entries) {
        return <p>No entries found</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            YAY
            {/*{data?.entries?.map((entry) => (*/}
            {/*    <div key={entry.id} className="bg-white shadow-md rounded-lg p-6">*/}
            {/*        <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}
