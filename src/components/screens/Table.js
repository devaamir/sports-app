import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function Table() {

    const [table,setTable] = useState([]);
    const [tbl,setTbl] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.npoint.io/a5dfe0fc4834e0e3d34e')
        .then(function (response) {
            setTable(response.data.data);

            // Sort function
            function sortByKey(array, key) {
                return array.sort(function(a, b) {
                    var x = a[key]; var y = b[key];
                    return ((x > y) ? -1 : 0);
                });
            }

            setTbl(sortByKey(response.data.data, "Pts"));
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);
    return (
        <div>
            <Main>
                <Top>
                <Heading>La Liga 20-21 Season</Heading>
                </Top>
                <TableContainer>
                    <Container>
                        <Thead>
                            <Tr>
                                <Th>Club</Th>
                                <Th>MP</Th>
                                <Th>W</Th>
                                <Th>D</Th>
                                <Th>L</Th>
                                <Th>GF</Th>
                                <Th>GA</Th>
                                <Th>GD</Th>
                                <Th>Pts</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {tbl.map((tables,index) => (
                        <Tr key={tables.id}>
                                <Td><P>{index+1}</P> <TmLogo src={tables.img} alt="team1" />{tables.team}</Td>
                                <Td>{tables.MP}</Td>
                                <Td>{tables.W}</Td>
                                <Td>{tables.D}</Td>
                                <Td>{tables.L}</Td>
                                <Td>{tables.GF}</Td>
                                <Td>{tables.GA}</Td>
                                <Td>{tables.GD}</Td>
                                <Td>{tables.Pts}</Td>

                            </Tr>
                            ))}
                        </Tbody>
                    </Container>
                </TableContainer>
            </Main>
        </div>
    )
}


const Main = styled.section`
    // padding: 40px 20px 0;
`;

const Top = styled.div`
    background: #E80A47;
`;

const TableContainer = styled.div``;

const Heading = styled.h3`
    text-align: center;
`;

const Container = styled.table`
    // margin-top: 40px;
    width: 50%;
    margin: 10px auto;
    border: 2px solid #E80A47;
    background: #F1F3F4;
`;

const Thead = styled.thead`
    width: 100%;
`;

const Tr = styled.tr`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    tbody &:nth-child(2n) {
        background: #E4E5E9;
    }
    tbody &:nth-last-child(-n+2) {
        background: #F5443D;
        color: #fff;
    }
    tbody &:nth-child(-n+2) {
        background: #2C84EF;
        color: #fff;
    }
    tbody &:nth-child(3) {
        background: #FF7C30;
        color: #fff;
    }
`;

const Th = styled.th`
    width: 6.25%;
    text-align: left;
    border-bottom: 2px solid #E80A47;
    align-items: center;
    display: flex;
    &:first-child {
        width:50%;
    }
`;

const Tbody = styled.tbody`
    width: 100%;
`;

const Td = styled.td`
    width: 6.25%;
    text-align: left;
    align-items: center;
    display: flex;
    justify-content: space-arround;
    &:first-child {
        width:50%;
        // align-items: center;
        // display: flex;
    }
`;

const P = styled.p`
    width: 25px;
`;

const TmLogo = styled.img`
    height: 60%;
    display: inline-block;
    margin: 0 10px 0 0;
    // display: none;
`;