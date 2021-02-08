import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

export default function Matches() {

    const [matches,setMatches] = useState([]);
    const [singleMatch,setSingleMatch] = useState([]);
    const [goalScorers1,setGoalScorers1] = useState([]);
    const [goalScorers2,setGoalScorers2] = useState([]);

    useEffect(() => {
            axios
            .get('https://api.npoint.io/2a326cca783e9b8f84c4')
            .then(function (response) {
                setMatches(response.data.data);
                setSingleMatch([response.data.data[0]]);
                // setGoalScorers1([]);
                // setGoalScorers2([]);
                // setGoalScorers1([singleMatch].find((match => match)));
                // setGoalScorers2([singleMatch].find((match => match)));
                // console.log(response.data.data[0].gscrt1);
                setGoalScorers1(response.data.data[0].gscrt1);
                setGoalScorers2(response.data.data[0].gscrt2);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    let selectOne = (id) => {
        setSingleMatch([matches.find((match) => match.id === id)]);
        // const set = (singleMatch.find((match => match)));
        setGoalScorers1((matches.find((match) => match.id === id)).gscrt1);
        setGoalScorers2((matches.find((match) => match.id === id)).gscrt2);
    }

    return (
        <div>
                <Main>
                {singleMatch.map((selmatch) => ( <>
                    <Top>
                    <TeamImg src={selmatch.bnimgt1} alt="Player1" />
                    <TeamImg src={selmatch.bnimgt2} alt="Player2" />
                    </Top>
                    <Bottom>
                        <TeamScore>
                            <Items>
                                <Team>
                                <TeamLogo src={selmatch.t1lg} alt="team1" />
                                <TeamName>{selmatch.team1}</TeamName>
                                <Ul>
                                {goalScorers1.map((goalScorer, index) => (
                                        <List key={index}>
                                                {goalScorer}
                                        </List>
                                        ))}
                                </Ul>
                                </Team>
                                <Score>{selmatch.t1g}</Score>
                                <Score>{selmatch.t2g}</Score>
                                <Team>
                                <TeamLogo src={selmatch.t2lg} alt="team2" />
                                <TeamName>{selmatch.team2}</TeamName>
                                <Ul>
                                    {goalScorers2.map((goalScorer, index) => (
                                        <List key={index}>
                                                {goalScorer}
                                        </List>
                                        ))}
                                </Ul>
                                </Team>
                            </Items>
                            <P>{selmatch.date}</P>
                            <P>{selmatch.time}</P>
                            <P>{selmatch.currenttime}</P>
                            <TeamDetails>
                                <MatchDetails>{selmatch.title}, {selmatch.titledet}</MatchDetails>
                            </TeamDetails>
                        </TeamScore>
                    </Bottom>
            </>     ))}
                </Main>
                <More>
                {matches.map((match) => (
                    <Match key={match.id} onClick={() =>selectOne(match.id)}>
                        <Heading>{match.title}</Heading>
                        <Content>
                            <Side>
                            <TmLogo src={match.t1lg} alt="team1" />
                            <TmName>{match.team1}</TmName>
                            </Side>
                            <TmScore>{match.t1g}</TmScore>
                            |
                            <TmScore>{match.t2g}</TmScore>
                            <Side>
                            <TmName>{match.team2}</TmName>
                            <TmLogo src={match.t2lg} alt="team2" />
                            </Side>
                        </Content>
                    </Match>
                    ))}
                </More>
        </div>
    )
}

const Main = styled.section`
    background: #DD0543;
    padding: 0 0 50px;
`;

const Top = styled.div`
    display: flex;
    z-index: 1;
`;

const TeamImg = styled.img`
    width: 50%;
    filter: grayscale(100%) brightness(35%);
    z-index: 2;
    object-fit: cover;

`;

const Bottom = styled.div``;

const TeamScore = styled.div`
    width: 80%;
    margin: -130px auto 0;
`;

const Items = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;

const TeamLogo = styled.img`
    height: 300px;
    z-index: 4;
`;

const Score = styled.h1`
    font-size: 100px;
    color: #fff;
    font-weight: bold;
`;

const TeamDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`;

const TeamName = styled.h2`
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    margin: 50px 0;
`;

const MatchDetails = styled.p`
    max-width: 50%;
    color: #fff;
    font-size: 28px;
    text-align: center;
    margin: 0 75px;
`;

const Team = styled.div`
    z-index: 3;
    width: 25%;
    text-align: center;
`;

const Ul = styled.ul`
    width: 80%;
    margin: 0 auto;
`;

const List = styled.li`
    color: #fff;
    text-align: left;
    margin-top: 10px;
`;

const P = styled.p `
    text-align: center;
    margin: 30px 0;
    font-weight: bold;
    color: #fff;
    font-size: 26px;
`;

const More = styled.section`
    padding: 100px 50px;
`;

const Match = styled.div`
    padding: 20px 40px;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 50px;
    cursor: pointer;
`;

const Side = styled.div`
    width: 30%;
    text-align: center;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

const TmLogo = styled.img`
    height: 100px;
`;

const TmName = styled.h3`
    margin: 0 20px;
    font-size: 24px;
    color: #000;
`;

const TmScore = styled.h2`
    font-size: 36px;
    margin: 0 30px;
    color: #000;
`;

const Content = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 75%;
    margin: 0 auto;
    color: #000;
`;

const Heading = styled.h3`
    text-align: center;
    color: #000;
`;