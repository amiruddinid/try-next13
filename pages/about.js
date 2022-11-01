export default function About({data}){
    return (
        <div>
            {
                data ? data.map((el, i) => (
                    <div key={i}>
                        <h4>{el.title}</h4>
                        <p>{el.body}</p>
                    </div>
                )) : <div>No Data</div>
            }
        </div>
    )
}

//SSR
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}