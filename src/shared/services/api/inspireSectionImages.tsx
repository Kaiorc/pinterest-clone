import axios from "axios";

const booksAPI = axios.create({ baseURL: "http://localhost:3000/inspireSectionImages" });

export async function getInspireSectionImages() {
    const response = await booksAPI.get('/')

    // console.log(response.data)
    
    return response.data
}