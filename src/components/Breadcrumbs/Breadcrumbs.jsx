import styled from 'styled-components/macro';

const Breadcrumbs = ({ children }) => {
    return (
        <nav aria-label='Breadcrumb'>
        <BreadcrumbList> { children } </BreadcrumbList>
    </nav>     
    )
}

const BreadcrumbList = styled.ol`
    padding: 0;
    margin: 0;
    list-style: none;
`

export default Breadcrumbs