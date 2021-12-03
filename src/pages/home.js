import './home.css';

export default function Home(){
    document.body.classList = 'bodyHomeBG';
    return (
        <main className="indexContent">
            <section className="indexContent__infoContainer">
                <div className="indexContent__info">
                    <h2 className="indexContent__subtitle">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="indexContent__title">SPACE</h1>
                    <p className="indexContent__description">
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </section>
            <section className="indexContent__exploreContainer">
                <div className="circle">
                    EXPLORE
                </div>
            </section>
        </main>
    )
}