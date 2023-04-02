import styled from 'styled-components'

export const MenuContainer = styled.nav`

    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: -6.3rem;
    padding-top: 4rem;
    gap: 1rem;

    .home, .favorites {
        color: #222;
        text-decoration: none;
        border-bottom: 1px solid #222;
        padding: .5rem;
        transition: .4s;

        &:hover {
            opacity: .3;
        }
    }
`