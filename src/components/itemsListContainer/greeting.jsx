
const Greeting = (categoryId, greeting) => {
    categoryId ? <h1>{categoryId}</h1> : <h1>{greeting}</h1>
} 

export default Greeting