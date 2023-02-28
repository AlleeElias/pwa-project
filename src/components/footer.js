//Component 3
export function FooterDiv() {
    return (
        <footer className={'bg-dark text-center text-white'}>
            <div className={'container p-4'}>
                <h5>Find me on Socials!</h5>
                <section className={'mb-4'}>
                    <SocialButton text={'LinkedIn'} link={'https://www.linkedin.com/in/elias-neel/'}></SocialButton>
                    <SocialButton text={'GitHub'} link={'https://github.com/AlleeElias'}></SocialButton>
                    <SocialButton text={'Mail me!'}
                                  link={'mailto:r0887113@student.thomasmore.be?SUBJECT=Project'}></SocialButton>
                </section>
                <h6>This website was created by Elias 'Allee' Neel</h6>
            </div>
        </footer>
    );
}

//Component 5
function SocialButton(props) {
    const {text, link} = props
    return <a className="btn btn-outline-light btn-floating m-1" href={link}
              role="button">
        {text}
    </a>
}