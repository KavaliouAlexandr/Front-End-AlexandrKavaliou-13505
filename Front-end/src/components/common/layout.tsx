import React from 'react'
import styled from 'styled-components';
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from '../Navbar';


const Wrapper = styled.div`

`;

const Content = styled.div`
    width: 1024px;
    heigh: 100%;
    margin: 0 auto;
    padding: 1rem;
    
`;

interface IProps {
    children: JSX.Element;
}

export const Layout: FC<IProps> = props => {
    return (
        <Wrapper>
            <Navbar>
                <div>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </Navbar>
        </Wrapper>
    )
}