import { utilService } from "../services/util.service.js";

export function About (){
    return <main className="about">
        <article>
            <div className="about-image flex">
                <img src="https://i.pinimg.com/originals/b5/32/e6/b532e6df6ae499520ed589f4a5b2bdc1.gif" alt="" />
            </div>
            <p>
                {utilService.makeLorem()}
            </p>
        </article>
    </main>
}