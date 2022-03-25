import { v4 as uuid } from 'uuid'

const user = {
    name: "Gustavo Palmeira",
    img: "https://github.com/Gustavo-Palmeira.png",
    id: uuid()
}

export const getPost = () => ({
    id: uuid(),
    user: user,
    text: "Olá, mundo",
    img: "https://www.bandab.com.br/wp-content/uploads/2022/03/METRO%CC%81POLES-MORADOR-DE-RUA.jpg",
    likes: 10,
    comments: [{
        user: user,
        text: 'uahsuahauhsuahsuahsau'
    }]
})