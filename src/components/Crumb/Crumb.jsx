import styled from "styled-components/macro"

export default function Crumb ({ href, children }) {
    return (
        <CrumbWrapper> 
            <CrumbLink href={href}> {children} </CrumbLink>
        </CrumbWrapper> 
    )
}

const CrumbWrapper = styled.li`
    display: inline;
    --spacing: 12px;

    &:not(:first-of-type) {
        margin-left: var(--spacing);

        &::before {
            content: '/';
            opacity: 0.25;
            margin-right: var(--spacing);
        }
    }
`

const CrumbLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: revert
    }
`