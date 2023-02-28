export function StartPage() {
    return (<div className={'vh-100 row align-items-center justify-content-center'}>
        <img className={'col-sm-8 col-12'} src={'images/homepagepic.jpg'} alt={''}></img>
        <div className={'col-sm-4 col'}>
            <h1 className={'text-center bg-light text-dark'}>Welcome to the web!</h1>
            <h2 className={'text-center'}>I hope you enjoy your stay here :)</h2>
            <p className={'text-center'}>
                Have fun looking and talking about posted photo's. You can visit pages by using the navigation bar!
            </p>
        </div>
    </div>);
}