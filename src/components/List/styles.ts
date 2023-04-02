import styled from 'styled-components'

export const ListContainer = styled.div`
    width: 100vw;
    height: 100vh;    

    .list {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .characters {
            width: 80%;
            height: 60%;
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;

            .character {
                position: relative;
                height: 25rem;
                width: 12rem;
                img {
                    height: 12rem;
                }

                .infosCharacter {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #222;
                    width: 12rem;
                    height: 12rem;
                    border-radius: 0 0 .4rem .4rem;
                    overflow-wrap: break-word;  
                    word-wrap: break-word; 
                    word-break: break-word;
                    
                    p {
                        margin-top: 1rem;
                        color: #03EF02;
                        text-align: center;
                        padding: 0 .5rem;
                        font-size: .9rem;
                    }
                }
            }

            .favButton {
                position: absolute;
                top: 0;
            }

            @media (min-width: 1023px) {
                &::-webkit-scrollbar {
                    width: 12px;              
                }

                &::-webkit-scrollbar-track {
                    background: #A9DF9E;
                    border: 1px solid white;    
                    border-radius: 20px;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #03EF02;    
                    border-radius: 20px;       
                    border: 3px solid white;  
                }
            }
        } 
        
        
    }

    .buttons {
        width: 100vw;
        display: flex;
        justify-content: center;
        gap: .5rem;
        margin-top: -6rem;
        button {
            background-color: #222;
            color: #03EF02;
            padding: 1rem;
            border: 2px solid #03EF02;
            border-radius: .5rem;
            cursor: pointer;
            transition: .5s;

            &:hover {
                background-color: transparent;
                color: #222;
            }
        }
    }

    
`
