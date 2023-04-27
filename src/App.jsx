import { useState } from 'react'
import './App.css'

function App() {
    const [page, setPage] = useState(0)

    return (
        <>
            <Navbar page={page} setPage={setPage}>
                <button onClick={() => setPage(0)}>One</button>
                <button onClick={() => setPage(1)}>Two</button>
                <button onClick={() => setPage(2)}>Three</button>
                <button onClick={() => setPage(3)}>Four</button>
            </Navbar>
            <Content page={page} setPage={setPage}>
                <Page><Endings_Ach/></Page>
                <Page>Page Two</Page>
                <Page>Page Three</Page>
            </Content>
        </>
    )
}

function Navbar(props) {
    const { page, setPage, children } = props;

    return (
        <div className={'Navbar'}>
            { children }
        </div>
    )
}

function Content(props) {
    const { page, setPage, children } = props;

    return (
        <div className={'Content'}>
            { children[page] ?? 'Page Not Available' }
        </div>
    )
}

function Page(props) {
    const { children } = props;

    return (
        <div className={'Page'}>
            { children }
        </div>
    )
}

function AchieveSection(props) {
    const { title, children } = props;
    return (
        <>
            <h2>{ title.text }</h2>
            {
                title.linkSrc &&
                <a className={'section-link'}
                   href={title.linkSrc}
                   target='_blank'>
                    { title.linkText }
                </a>
            }
            { children }
        </>
    )
}

function Achievement(props) {
    const { achData, expandedDefault } = props;

    return (
        <div className={'Achievement'}>
            <img width={'64px'} height={'64px'} src={achData.imgUrl} alt={achData.title}/>
            <div>
                <h3>{achData.title}</h3>
                <a href={achData.linkSrc} target={'_blank'}>{achData.linkText}</a>
            </div>
            <p>{achData.desc}</p>
        </div>
    )
}
function Endings_Ach(props) {
    const title = {
        'text': 'Endings',
        'linkSrc': 'https://eldenring.wiki.fextralife.com/Endings',
        'linkText': 'Endings List'
    }

    const achievements = [
        {
            "imgUrl": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden_lord.png",
            "title": "Elden Lord",
            "linkSrc": "https://eldenring.wiki.fextralife.com/Endings",
            "linkText": "Wiki",
            "desc": "Complete the game with any of the 4 ‘Elden Lord’ endings",
            "miss-able": false,
        },
        {
            "imgUrl": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/age_of_stars.png",
            "title": "Age of the Stars",
            "linkSrc": "https://eldenring.wiki.fextralife.com/Endings",
            "linkText": "Wiki",
            "desc": "Complete the game with and Ranni’s quest without Frenzied Flame",
            "miss-able": false,
        },
        {
            "imgUrl": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lord_of_frenzied_flame.png",
            "title": "Lord of Frenzied Flame",
            "linkSrc": "https://eldenring.wiki.fextralife.com/Endings",
            "linkText": "Wiki",
            "desc": "Complete the game with the Frenzied Flame",
            "miss-able": false,
        }
    ]

    return (
        <AchieveSection
            title={title}
        >
            {achievements.map((achievement, index) => (
                <Achievement key={index} achData={achievement} expandedDefault={true}/>
            ))}
        </AchieveSection>
    )
}


export default App
