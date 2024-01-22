import { Scroll } from "@react-three/drei"

const Section = (props) => {
    return ( 
        <section className="h-screen flex flex-col justify-center p-10">
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-grey rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Overlay = () => {
    return (
        <Scroll html>
            <Section>
                <h1 className="font-serif text-2xl">Hello world</h1>
            </Section>

            <Section>
                <h1 className="font-serif text-2xl">Hello world</h1>
            </Section>

            <Section>
                <h1 className="font-serif text-2xl">Hello world</h1>
            </Section>
            
            <Section>
                <h1 className="font-serif text-2xl">Hello world</h1>
            </Section>
        </Scroll>
    
    )
}