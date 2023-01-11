import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


export default function Feed(){

    const [postingText, setpostingText] = useState("");
    const [postingUrl, setpostingUrl] = useState("");

    let token = 'a';
    //receber o token corretamente
    let userId = 1;
    //usar o token pra receber o userId

    function createPost(e){
        e.preventDefault();

        const body = {
            userId,
            link:postingUrl,
            description:postingText
        }
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const URL = "http://localhost:4000/post";
        
        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log(res.data);
            //atualizar pagina com reload ou useEffect?
        })
        promise.catch((err) => {
            console.log(err.response.data);
            alert("Ocorreu um erro, tente novamente!");
            
        })

        
    }


    return(
        <Container>
            <Main>
                <h1>timeline</h1>
                <CreatePost>
                    <UserImage>
                        <img src="https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_3x4.jpg" alt="velhinho rindo"/>
                    </UserImage>
                    <CreatePostInfo>
                        <h2>
                            What are you going to share today?
                        </h2>
                        <form onSubmit={createPost}>
                            <Input1 placeholder="http://..." type="text" value={postingUrl} onChange={(e) => setpostingUrl(e.target.value)} required/>
                            <Input2 placeholder="Awesome article about #javascript" type="text" value={postingText} onChange={(e) => setpostingText(e.target.value)} />
                            <ButtonDiv>
                                <button type="submit">
                                    <h3>
                                        Publish
                                    </h3>
                                </button>
                            </ButtonDiv>
                        </form>
                    </CreatePostInfo>
                </CreatePost>
                <Post>
                    <UserImage>
                        <img src="https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_3x4.jpg" alt="velhinho rindo"/>
                    </UserImage>
                    <PostInner>
                       <h1>Juvenal Juvêncio </h1>
                       <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h2> 
                    </PostInner>

                </Post>
            </Main>

        </Container>
    )
}

const Container = styled.div`
width: 100vw;
min-height:100vh;
height:100%;
background-color: #333333;
padding-top: 72px;
display:flex;
justify-content:center;
`

const Main = styled.div`
background-color: #333333;
padding-top:78px;
display:flex;
flex-direction:column;

h1{
    font-family: Oswald;
font-size: 43px;
font-weight: 700;
line-height: 64px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
margin-bottom:43px;
}
`

const CreatePost = styled.div`
height: 209px;
width: 611px;
border-radius: 16px;
background-color: #FFFFFF;
display:flex;
padding: 16px 22px 16px 18px;
margin-bottom:29px;
`

const UserImage = styled.div`
img{

    height: 50px;
    width: 50px;
    border-radius: 26.5px;
    margin-right:18px;
}
`
const CreatePostInfo = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
/* input{
    height: 30px;
width: 100%;
border-radius: 5px;
background-color:#EFEFEF;
margin-bottom:5px;
border:none;
&::placeholder{
    font-family: Lato;
font-size: 15px;
font-weight: 300;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color:#949494;
}

} */

h2{
    font-family: Lato;
font-size: 20px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:#707070;
margin-top:auto;
margin-bottom:auto;
}
`
const Input1 = styled.input`
 height: 30px;
width: 100%;
border-radius: 5px;
background-color:#EFEFEF;
margin-bottom:5px;
border:none;
padding-left:12px;
&::placeholder{
    font-family: Lato;
font-size: 15px;
font-weight: 300;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color:#949494;
}
`
const Input2 = styled.input`
 height: 66px;
width: 100%;
border-radius: 5px;
background-color:#EFEFEF;
margin-bottom:5px;
border:none;
padding-left:12px;

&::placeholder{
    font-family: Lato;
font-size: 15px;
font-weight: 300;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color:#949494;
}
`

const ButtonDiv = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
button{
    height: 31px;
width: 112px;
border-radius: 5px;
background-color:#1877F2;
display:flex;
align-items:center;
justify-content:center;
border:none;
h3{
    font-family: Lato;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color:#ffffff;
}

}
`
const Post = styled.div`
height: auto;
width: 611px;
border-radius: 16px;
background-color:#171717;
padding: 16px 22px 16px 18px;
display:flex;
margin-bottom:16px;
`

const PostInner = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;

h1{
    font-family: Lato;
font-size: 19px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color:#FFFFFF;
}
h2{
    font-family: Lato;
font-size: 17px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#B7B7B7;
}
`